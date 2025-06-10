document.addEventListener('DOMContentLoaded', () => {
    const ideaForm = document.getElementById('ideaForm');
    const ideaInput = document.getElementById('ideaInput');
    const ideasList = document.getElementById('ideasList');

    // Load ideas from localStorage
    let ideas = JSON.parse(localStorage.getItem('dateIdeas')) || [];
    renderIdeas();

    ideaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idea = ideaInput.value.trim();
        if (idea.length === 0) return;
        ideas.unshift(idea);
        localStorage.setItem('dateIdeas', JSON.stringify(ideas));
        ideaInput.value = '';
        renderIdeas();
    });

    function renderIdeas() {
        ideasList.innerHTML = '';
        if (ideas.length === 0) {
            ideasList.innerHTML = '<li style="color:#aaa; font-style:italic;">No ideas yet. Be the first to share one!</li>';
            return;
        }
        ideas.forEach((idea) => {
            const li = document.createElement('li');
            li.textContent = idea;
            ideasList.appendChild(li);
        });
    }
}); 