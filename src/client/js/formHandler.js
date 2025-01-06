import { checkUrl } from './clientUrlCheck';
const form = document.getElementById('webForm');
expect(form).not.toBeNull();
form.addEventListener('submit', handleSubmitNow);


async function handleSubmitNow(event) {
    event.preventDefault();

    const clientUrl = document.getElementById('UrlPathId').value;

    if (checkUrl(clientUrl)) {
        try {
            const response = await submitUrlToServer('/api', { url: clientUrl });
            displayResults(response);
        } catch (error) {
            console.error('Error submitting URL:', error);
            alert("Failed to retrieve data. Please try again later.");
        }
    } else {
        alert("Enter a valid URL Address in this format: http://example.com");
    }
}

async function submitUrlToServer(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('No Network response ');
    }
    return response.json();
}

function displayResults(response) {
    const resultElements = {
        polarity_text: `polarity: ${response.score_tag}`,
        agreement_text: `agreement: ${response.agreement}`,
        subjectivity_text: `subjectivity: ${response.subjectivity}`,
        confidence_text: `confidence: ${response.confidence}`,
        irony_text: `irony: ${response.irony}`,
        snippet_text: `snippet: ${response.snippet || 'No data'}`
        
    };

    Object.keys(resultElements).forEach(id => {
        document.getElementById(id).innerHTML = resultElements[id];
    });
}

export { handleSubmitNow };
