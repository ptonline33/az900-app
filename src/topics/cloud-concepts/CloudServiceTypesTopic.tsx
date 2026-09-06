import React from 'react';

const CloudServiceTypesTopic: React.FC = () => {
  return (
    <div>
      <h1>Cloud Service Types (How Much Do You Do vs. Microsoft?)</h1>
      
      <p>
        Cloud services come in three flavors: <strong>IaaS, PaaS, and SaaS.</strong>
        The easiest way to tell them apart is to ask: <em>"Who does the work — me or the provider?"</em>
        The more letters there are, the less hands-on work you do!
      </p>

      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Who Manages What (Left to Right, You Do Less)</h3>
        <div className="relative">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">Running It Yourself</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">IaaS</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm flex justify-between">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">PaaS</h4>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm flex justify-between">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">You Manage</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <h4 className="text-center font-medium mb-3">SaaS</h4>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Applications</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Data</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Runtime</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Middleware</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">O/S</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Virtualization</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-2 text-center">Servers</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Storage</div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">Networking</div>
              <div className="mt-3 text-center text-sm">
                <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Provider Manages</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="inline-block bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg">
              <span className="font-medium">More Control</span>
              <span className="mx-4">→</span>
              <span className="font-medium">Less Control</span>
            </div>
          </div>
        </div>
      </div>

      <h2>IaaS — You Rent the Machines (Infrastructure as a Service)</h2>
      
      <p className="mb-4">
        Compare it to <strong>renting an empty apartment and furnishing it yourself.</strong>
        You get the raw building (the virtual machine), and you take care of setting up the operating system, 
        installing software, and running your apps.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">What Makes IaaS Special</h3>
        <ul className="space-y-2">
          <li>• <strong>Control:</strong> You manage the OS, the extra software, and your apps</li>
          <li>• <strong>Virtualization:</strong> Microsoft handles the physical machines and virtualization</li>
          <li>• <strong>Flexibility:</strong> Pick your own operating system and tools</li>
          <li>• <strong>Scalability:</strong> Easily make machines bigger or smaller</li>
          <li>• <strong>Payment:</strong> Pay for what you use, usually by the hour or minute</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Good For:</h4>
        <ul className="space-y-1">
          <li>• Moving existing apps to the cloud ("lift and shift")</li>
          <li>• Test and development environments</li>
          <li>• Storage, backup, and recovery</li>
          <li>• Heavy, high-power computing</li>
          <li>• Big data analysis</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure Examples:</h4>
        <ul className="space-y-1">
          <li>• Azure Virtual Machines</li>
          <li>• Azure Storage</li>
          <li>• Azure Virtual Networks</li>
          <li>• Azure Load Balancer</li>
        </ul>
      </div>

      <h2>PaaS — You Get a Ready-to-Code Stage (Platform as a Service)</h2>
      
      <p className="mb-4">
        Compare it to <strong>renting a furnished apartment with utilities included.</strong>
        Microsoft handles the building, plumbing, wiring, and even the flooring — you just move in your 
        furniture (your code and data) and focus on building your app.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">What Makes PaaS Special</h3>
        <ul className="space-y-2">
          <li>• <strong>Focus:</strong> You spend your time on the app, not on managing infrastructure</li>
          <li>• <strong>Management:</strong> Microsoft handles the OS, tools, and underlying hardware</li>
          <li>• <strong>Built-in Tools:</strong> Development, database, and analytics tools come ready</li>
          <li>• <strong>Teamwork:</strong> Many developers can work together at once</li>
          <li>• <strong>Fast Launch:</strong> Quickly deploy and update your apps</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Good For:</h4>
        <ul className="space-y-1">
          <li>• Building web applications</li>
          <li>• Building and managing APIs</li>
          <li>• Business analytics and reporting</li>
          <li>• Internet of Things (IoT) applications</li>
          <li>• Serverless functions</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure Examples:</h4>
        <ul className="space-y-1">
          <li>• Azure App Service</li>
          <li>• Azure Functions</li>
          <li>• Azure Logic Apps</li>
          <li>• Azure SQL Database</li>
          <li>• Azure Cognitive Services</li>
        </ul>
      </div>

      <h2>SaaS — You Just Use the Finished App (Software as a Service)</h2>
      
      <p className="mb-4">
        Compare it to <strong>staying at a hotel.</strong> Everything is already done — the bed, the meals, 
        the cleaning. You just show up and use it. SaaS means someone else built, runs, and maintains 
        an app that you simply log in and use.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-6">
        <h3 className="mb-3">What Makes SaaS Special</h3>
        <ul className="space-y-2">
          <li>• <strong>Ready to Use:</strong> No installing or setting up — just log in</li>
          <li>• <strong>Subscription:</strong> You pay a fee, usually monthly or yearly</li>
          <li>• <strong>No Maintenance:</strong> The provider does all updates and fixes</li>
          <li>• <strong>Anywhere Access:</strong> Use it from anywhere with internet</li>
          <li>• <strong>Shared:</strong> Many customers use the same app</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Good For:</h4>
        <ul className="space-y-1">
          <li>• Email and collaboration (e.g., Microsoft 365, Google Workspace)</li>
          <li>• Customer management (CRM)</li>
          <li>• Business planning (ERP)</li>
          <li>• Project management tools</li>
          <li>• Everyday productivity apps</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Azure Examples:</h4>
        <ul className="space-y-1">
          <li>• Microsoft 365</li>
          <li>• Dynamics 365</li>
          <li>• Microsoft Teams</li>
          <li>• Power BI</li>
        </ul>
      </div>

      <h2>Which One Fits Which Situation?</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>IaaS</th>
              <th>PaaS</th>
              <th>SaaS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Moving an existing app to the cloud</td>
              <td>✅ Best</td>
              <td>⚠️ Possible but may need changes</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Building a brand-new cloud app</td>
              <td>⚠️ Possible but more work</td>
              <td>✅ Best</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Hosting websites and web apps</td>
              <td>⚠️ Possible but more management</td>
              <td>✅ Best</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Data storage, backup, recovery</td>
              <td>✅ Good</td>
              <td>✅ Good</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Test and development environments</td>
              <td>✅ Best</td>
              <td>⚠️ Possible</td>
              <td>❌ Not applicable</td>
            </tr>
            <tr>
              <td>Email and collaboration tools</td>
              <td>❌ Not recommended</td>
              <td>❌ Not recommended</td>
              <td>✅ Best</td>
            </tr>
            <tr>
              <td>Need total control over infrastructure</td>
              <td>✅ Best</td>
              <td>❌ Limited control</td>
              <td>❌ Minimal control</td>
            </tr>
            <tr>
              <td>Want as little management as possible</td>
              <td>❌ Lots of management</td>
              <td>⚠️ Some management</td>
              <td>✅ Least management</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>IaaS (Infrastructure as a Service):</strong> You manage the OS, tools, and apps; Microsoft manages the physical hardware.
        </li>
        <li>
          <strong>PaaS (Platform as a Service):</strong> You manage your apps and data; Microsoft manages the platform and everything under it.
        </li>
        <li>
          <strong>SaaS (Software as a Service):</strong> You only manage your data and access; Microsoft runs the whole app.
        </li>
        <li>
          <strong>Responsibility Shift:</strong> Moving from IaaS → PaaS → SaaS, you gain convenience but lose control.
        </li>
        <li>
          <strong>Pick by Need:</strong> Choose based on how much control vs. how little work you want.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the key differences between IaaS, PaaS, and SaaS</li>
          <li>• Know who manages what in each model</li>
          <li>• Be able to pick the right model for a scenario</li>
          <li>• Recognize common Azure services for each model</li>
          <li>• Know how the shared responsibility model applies to each service type</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudServiceTypesTopic;
