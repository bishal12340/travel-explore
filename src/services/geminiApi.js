const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateItinerary = async (destination, days, style) => {
  if (!GEMINI_API_KEY) {
    console.warn('Gemini API key missing. Using mock itinerary data.');
    return new Promise(resolve => setTimeout(() => resolve(getMockItinerary(destination, days)), 1500));
  }

  const prompt = `
    You are an expert travel planner. Create a detailed ${days}-day itinerary for a trip to ${destination}.
    The travel style is: ${style}.
    Return the response as a valid JSON array where each object represents a day.
    Do NOT wrap the JSON in markdown code blocks. Just return the raw JSON array.
    
    Structure each day object exactly like this:
    {
      "day": 1,
      "title": "Day title/theme",
      "activities": [
        { "time": "09:00 AM", "title": "Place name", "description": "Short description of what to do." },
        { "time": "12:30 PM", "title": "Lunch", "description": "Lunch recommendation." }
      ]
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API error details:', errorData);
      throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // Clean up potential markdown blocks if Gemini didn't listen
    let cleanJson = textResponse.trim();
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.replace(/```json/g, '').replace(/```/g, '').trim();
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.replace(/```/g, '').trim();
    }

    return JSON.parse(cleanJson);
  } catch (error) {
    console.error('Error generating itinerary:', error);
    // Pass the actual error message to the UI
    throw new Error(error.message || 'Failed to generate itinerary. Please try again.');
  }
};

const getMockItinerary = (destination, days) => {
  const itinerary = [];
  for (let i = 1; i <= Math.min(days, 7); i++) {
    itinerary.push({
      day: i,
      title: `Exploring ${destination || 'the city'} - Part ${i}`,
      activities: [
        { time: '09:00 AM', title: 'Morning Attraction', description: `Start your day exploring the famous sights of ${destination || 'the area'}.` },
        { time: '12:30 PM', title: 'Local Lunch', description: 'Try some traditional local cuisine at a highly-rated restaurant.' },
        { time: '02:30 PM', title: 'Afternoon Activity', description: 'Visit a museum or take a walking tour.' },
        { time: '07:00 PM', title: 'Dinner & Evening Walk', description: 'Enjoy a relaxing dinner and stroll through the city center.' }
      ]
    });
  }
  return itinerary;
};
