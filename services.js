
document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { title: 'Tailored Meal Plans', description: 'Customized meal plans based on individual needs and preferences.' },
        { title: 'Easy-to-Follow Recipes', description: 'Simple and quick recipes that require minimal effort.' },
        { title: 'Nutritional Guidance', description: 'Expert advice on healthy eating habits and nutrient-dense foods.' },
        { title: 'Access to Healthy Food', description: 'Partnerships with local farmers and grocery stores to facilitate access to fresh produce.' },
        { title: 'Personalized Nutrition (PN)', description: 'Tailored dietary advice, products, and services based on an individual\'s unique characteristics. PN can help people prevent, manage, and treat diseases, and improve their overall health.' },
        { title: 'Tailored diet and supplement plans', description: 'PN can help people create a diet and supplement plan that\'s based on their unique status, including their genotype, blood measures, and health history.' },
        { title: 'Personalized nutritional products', description: 'PN can help people access nutritional products that are tailored to their needs.' },
        { title: 'Personalized nutritional guidance', description: 'PN can help people get specific guidance on healthy eating.' },
        { title: 'Personalized nutritional interventions', description: 'PN can help people develop interventions to improve their health.' },
        { title: 'Benefits of PN: Lasting dietary behavior changes', description: 'PN can help people achieve lasting dietary behavior changes that are beneficial for their health.' },
        { title: 'Benefits of PN: Reach health condition', description: 'PN can help people reach the health condition they aspire to.' },
        { title: 'Benefits of PN: Effective dietary changes', description: 'PN can help people make more effective and lasting changes to their dietary patterns.' },
        { title: 'Benefits of PN: Special nutritional support', description: 'PN can be applied to people with specific diseases or who need special nutritional support, as well as to healthy people.' },
    ];

    const servicesList = document.getElementById('services-list');
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        const serviceTitle = document.createElement('h2');
        serviceTitle.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        serviceItem.appendChild(serviceTitle);
        serviceItem.appendChild(serviceDescription);

        servicesList.appendChild(serviceItem);
    });
});
