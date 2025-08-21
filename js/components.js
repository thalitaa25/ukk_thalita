// Component Loader for SMK Thalita Website
class ComponentLoader {
    static async loadAll() {
        const components = [
            { selector: '#hero-placeholder', path: 'components/hero.html' },
            { selector: '#about-placeholder', path: 'components/about.html' },
            { selector: '#majors-placeholder', path: 'components/majors.html' },
            { selector: '#facilities-placeholder', path: 'components/facilities.html' },
            { selector: '#news-placeholder', path: 'components/news.html' },
            { selector: '#contact-placeholder', path: 'components/contact.html' },
            { selector: '#footer-placeholder', path: 'components/footer.html' }
        ];

        // Load all components in parallel
        const loadPromises = components.map(({ selector, path }) => 
            this.loadComponent(selector, path)
        );

        try {
            await Promise.all(loadPromises);
            console.log('All components loaded successfully');
            
            // Initialize main functionality after components are loaded
            if (window.ThalitaWebsite) {
                new window.ThalitaWebsite();
            }
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    static async loadComponent(selector, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            } else {
                console.warn(`Selector ${selector} not found in DOM`);
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
        }
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.loadAll();
});
