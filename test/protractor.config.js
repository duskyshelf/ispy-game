exports.config = {
          capabilities: {
                  // You can use other browsers
                  // like firefox, phantoms, safari, IE (-_-)
                  'browserName': 'chrome' 
          },
          specs: [
                'e2e/views.spec.js',
                'e2e/gallery.spec.js'
          ],
          jasmineNodeOpts: {
                  showColors: true,
                 defaultTimeoutInterval: 30000,
                isVerbose: true,
          },
        allScriptsTimeout: 20000,
          onPrepare: function(){
                browser.driver.get('http://localhost:8100');
        }
};