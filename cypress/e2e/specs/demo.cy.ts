describe('Cypress.io', () => {
    Cypress.Commands.overwrite<'visit', 'window'>(
        'visit',
        (originalFn, url, options: Partial<Cypress.VisitOptions> & {url:string}) => {
            var result = originalFn(url, options);
            cy.wrap(result).then(() => {
                cy.eyesCheckWindow({
                    tag: `Visited: ${url}`,
                    target: 'window',
                    fully: true,
                    layoutBreakpoints: { breakpoints: true, reload: false }
                });
                return result
            });
        }
    )

    Cypress.Commands.overwrite<'type', 'element'>(
        'type',
        (originalFn, element, text, options?: Partial<any>) => {
            var result = originalFn(element, text, options);
            cy.wrap(result).then(() => {
                cy.eyesCheckWindow({
                    tag: `Typed: "${text}" into element: '${element.selector}'`,
                    target: 'window',
                    fully: true,
                    layoutBreakpoints: { breakpoints: true, reload: false }
                });
                return result
            });
        }
    )
    
    Cypress.Commands.overwrite<'click', 'element'>(
        'click',
        (originalFn, subject, positionOrX, y, options?: Partial<any>) => {
            var result = originalFn(subject, positionOrX, y, options);
            cy.wrap(result).then(() => {
                cy.eyesCheckWindow({
                    tag: `Clicked element: '${subject.selector}'`,
                    target: 'window',
                    fully: true,
                    layoutBreakpoints: { breakpoints: true, reload: false }
                });
                return result
            });
        }
    )
    
    beforeEach(() => {
        cy.eyesOpen({
            notifyOnCompletion: true,
            batch: {
                notifyOnCompletion: true
            },
            browser: [
                {
                    chromeEmulationInfo:
                    {
                        deviceName: 'iPhone X', screenOrientation: 'portrait'
                    }
                },
                { width: 1920, height: 1080, name: 'chrome' },
                { width: 1920, height: 1080, name: 'firefox' },
                { width: 1920, height: 1080, name: 'safari' },

            ],
            layoutBreakpoints: { breakpoints: true, reload: false }
        });
    });
    it('Cypress Actions', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('#email1').type('test@email.com');
        cy.get('#type > a').click();
    });
    afterEach('Close Applitools', () => {
        cy.eyesClose();
    });
});