import React from 'react';

const ResourceManagementTopic: React.FC = () => {
  return (
    <div>
      <h1>Resource Management in Azure (How You Create and Control Things)</h1>
      
      <p>
        Azure gives you lots of ways to build and manage your stuff — a graphical website, 
        command-line tools, or even <strong>infrastructure defined as code.</strong> You can pick 
        whichever fits you best.
      </p>

      <h2>The Azure Portal (The Website Dashboard)</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Is the Azure Portal?</h3>
        <p className="mb-4">
          The portal is a <strong>web-based dashboard</strong> that lets you build, manage, and watch 
          everything with clicks and visuals — an easy alternative to typing commands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Point-and-click interface for Azure</li>
              <li>• Build your own dashboard</li>
              <li>• Create and manage resources</li>
              <li>• Watch things visually and get alerts</li>
              <li>• Manage permissions (RBAC)</li>
              <li>• Tag and organize resources</li>
              <li>• Global search box</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">What You Can Do</h4>
            <ul className="space-y-1">
              <li>• Create and manage any Azure resource</li>
              <li>• Set up resources and services</li>
              <li>• Watch health and metrics</li>
              <li>• Set alerts and notifications</li>
              <li>• Open a command-line right in the browser (Cloud Shell)</li>
              <li>• View and manage costs</li>
              <li>• Read docs and learning material</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Making It Yours</h3>
          <p className="mb-3">
            Customize the portal to fit how you like to work.
          </p>
          <h4 className="font-medium mt-4 mb-2">Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Dashboard:</strong> Make multiple custom dashboards with the tiles you want</li>
            <li>• <strong>Favorites:</strong> Pin often-used services to the side menu</li>
            <li>• <strong>Recent:</strong> Quick jump back to things you just visited</li>
            <li>• <strong>Theme:</strong> Light, dark, or high-contrast</li>
            <li>• <strong>Notifications:</strong> Choose what alerts you want</li>
            <li>• <strong>Language/Region:</strong> Set your preferred language and format</li>
            <li>• <strong>Start Page:</strong> Pick your default landing page</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Finding Your Way Around</h3>
          <p className="mb-3">
            Navigate the portal efficiently.
          </p>
          <h4 className="font-medium mt-4 mb-2">Helpful Bits:</h4>
          <ul className="space-y-1">
            <li>• <strong>Global Search:</strong> Find resources, services, docs</li>
            <li>• <strong>Resources Menu:</strong> See all resources and groups</li>
            <li>• <strong>Services Menu:</strong> Browse every Azure service</li>
            <li>• <strong>Subscription Filter:</strong> Narrow view by subscription</li>
            <li>• <strong>Resource Groups:</strong> Organize and filter</li>
            <li>• <strong>Tags:</strong> Filter resources by label</li>
            <li>• <strong>Breadcrumbs:</strong> See where you are in the tree</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Portal Tips</h3>
        <ul className="space-y-2">
          <li>• <strong>Make role-specific dashboards</strong> for different people or jobs</li>
          <li>• <strong>Use resource groups well</strong> to group related things</li>
          <li>• <strong>Tag consistently</strong> for easier management</li>
          <li>• <strong>Set alerts</strong> for important events</li>
          <li>• <strong>Pin</strong> important resources for quick access</li>
          <li>• <strong>Use keyboard shortcuts</strong> to move faster</li>
          <li>• <strong>Check "What's new"</strong> to see portal updates</li>
        </ul>
      </div>

      <h2>Azure Cloud Shell (A Command-Line in Your Browser)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">What Is Cloud Shell?</h3>
          <p className="mb-3">
            A <strong>command-line that runs right in your browser</strong> — no installing anything 
            on your computer.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Works in the browser</li>
            <li>• Already logged in with your Azure account</li>
            <li>• Keeps your files (5 GB) in Azure Files</li>
            <li>• Has common tools pre-installed</li>
            <li>• Ends sessions after 20 minutes of inactivity</li>
            <li>• Reachable from the portal or shell.azure.com</li>
            <li>• Works on mobile too</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Two Shell Choices</h3>
          <p className="mb-3">
            Pick which command style you like.
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Bash (Azure CLI)</h4>
            <ul className="space-y-1">
              <li>• Linux-style commands</li>
              <li>• Uses Azure CLI commands</li>
              <li>• Great for Linux folks and devs</li>
              <li>• Format: <code>az [group] [subgroup] [action]</code></li>
              <li>• Example: <code>az vm create --resource-group MyRG --name MyVM</code></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">PowerShell (Azure PowerShell)</h4>
            <ul className="space-y-1">
              <li>• Windows-style commands</li>
              <li>• Uses Azure PowerShell cmdlets</li>
              <li>• Familiar to Windows admins</li>
              <li>• Format: <code>Verb-Noun -Parameter Value</code></li>
              <li>• Example: <code>New-AzVM -ResourceGroupName MyRG -Name MyVM</code></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Azure CLI (Bash)</th>
              <th>Azure PowerShell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syntax</td>
              <td>Command-based (az vm create)</td>
              <td>Verb-Noun (New-AzVM)</td>
            </tr>
            <tr>
              <td>Output format</td>
              <td>JSON by default</td>
              <td>Object-based by default</td>
            </tr>
            <tr>
              <td>Script language</td>
              <td>Bash, Python, Node.js</td>
              <td>PowerShell scripts (.ps1)</td>
            </tr>
            <tr>
              <td>Learning curve</td>
              <td>Simpler for beginners</td>
              <td>Steeper but very powerful</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>Cross-platform, Linux-friendly</td>
              <td>Cross-platform, Windows-friendly</td>
            </tr>
            <tr>
              <td>Pipe support</td>
              <td>Standard Unix pipes</td>
              <td>PowerShell object pipeline</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Linux admins, Bash users</td>
              <td>Windows admins, PowerShell users</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What's Already Installed</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Pre-installed Tools</h4>
            <ul className="space-y-1">
              <li>• Azure CLI and Azure PowerShell</li>
              <li>• Git for source control</li>
              <li>• Text editors (vim, nano, code)</li>
              <li>• Package managers (apt, npm, pip)</li>
              <li>• Build tools (make, maven, npm)</li>
              <li>• Container tools (Docker CLI)</li>
              <li>• Database tools (MySQL, PostgreSQL clients)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Keeps Your Files</h4>
            <ul className="space-y-1">
              <li>• 5 GB Azure Files mounted as your home folder</li>
              <li>• Files stay between sessions</li>
              <li>• Available in both Bash and PowerShell</li>
              <li>• Stored in your default region</li>
              <li>• One file share per user</li>
              <li>• Tools update automatically</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Purpose of Azure Arc (Manage Everything, Everywhere)</h2>
      
      <p className="mb-4">
        Azure Arc <strong>stretches Azure's management powers to resources outside Azure</strong> — 
        your own data center, other clouds (like AWS/Google), or edge devices. You manage them 
        as if they lived in Azure.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">The Main Things Arc Can Manage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Servers</h4>
            <ul className="space-y-1 text-sm">
              <li>• Connect Windows and Linux servers</li>
              <li>• List and group them</li>
              <li>• Apply Azure Policy rules</li>
              <li>• Tag and organize</li>
              <li>• Watch them with Azure Monitor</li>
              <li>• Manage updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Kubernetes</h4>
            <ul className="space-y-1 text-sm">
              <li>• Connect any Kubernetes cluster</li>
              <li>• Deploy apps consistently</li>
              <li>• Manage configurations</li>
              <li>• Use GitOps-style setups</li>
              <li>• Azure Policy for Kubernetes</li>
              <li>• Watch with Azure Monitor</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Arc-enabled Data Services</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure SQL Managed Instance</li>
              <li>• PostgreSQL Hyperscale</li>
              <li>• One consistent data platform</li>
              <li>• Scale up and down</li>
              <li>• Always up to date</li>
              <li>• Unified management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Why Use Azure Arc</h3>
          <ul className="space-y-2">
            <li>• <strong>One control center:</strong> Manage everything from one place</li>
            <li>• <strong>Consistent rules:</strong> Apply Policy and RBAC everywhere</li>
            <li>• <strong>Azure services anywhere:</strong> Run data, app, and ML services outside Azure</li>
            <li>• <strong>GitOps at scale:</strong> Use Git to control setups</li>
            <li>• <strong>Familiar tools:</strong> Use the portal, APIs, CLI like normal</li>
            <li>• <strong>Cloud habits on-premises:</strong> Use cloud-style practices on your own gear</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">When You'd Use Arc</h3>
          <ul className="space-y-2">
            <li>• <strong>Manage hybrid servers:</strong> Watch Windows/Linux servers in different places</li>
            <li>• <strong>Fleet of clusters:</strong> Govern many Kubernetes clusters anywhere</li>
            <li>• <strong>Hybrid data:</strong> Run SQL and PostgreSQL outside Azure</li>
            <li>• <strong>Edge locations:</strong> Run Azure services where connection is limited</li>
            <li>• <strong>Keep data local:</strong> Follow data-soverignty rules while using Azure tools</li>
            <li>• <strong>Consistent deploys:</strong> Roll out apps the same way everywhere</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">How Azure Arc Fits Together</h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">Azure on Top</h4>
              <div className="text-center text-sm">
                Portal, APIs, CLI
              </div>
              <div className="text-center text-sm mt-2">
                Resource Manager, Policy, RBAC
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">Azure Arc</h4>
              <div className="text-center text-sm">
                Connection Service
              </div>
              <div className="text-center text-sm mt-2">
                Extension Management
              </div>
              <div className="text-center text-sm mt-2">
                Configuration Service
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="text-center mb-2">What You Connect</h4>
              <div className="text-center text-sm">
                Servers (Windows/Linux)
              </div>
              <div className="text-center text-sm mt-2">
                Kubernetes Clusters
              </div>
              <div className="text-center text-sm mt-2">
                Data Services
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <span className="bg-gray-200 dark:bg-gray-600 px-4 py-1 rounded-lg">
                Anywhere: On-premises, AWS, GCP, Edge
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2>Infrastructure as Code (IaC) (Your Infrastructure as Blueprints)</h2>
      
      <p className="mb-4">
        Infrastructure as Code means <strong>describing your infrastructure (servers, networks, etc.) in 
        code files</strong>, then letting Azure turn that code into real resources — same way every time.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Why IaC Is Great</h3>
          <ul className="space-y-2">
            <li>• <strong>Consistency:</strong> Build the exact same setup every time</li>
            <li>• <strong>Versioning:</strong> Track every change like code</li>
            <li>• <strong>Automation:</strong> Fewer manual steps, fewer mistakes</li>
            <li>• <strong>Scaling:</strong> Grow or shrink by editing code</li>
            <li>• <strong>Speed:</strong> Deploy complex setups fast</li>
            <li>• <strong>Documentation:</strong> The code explains the setup</li>
            <li>• <strong>Testing:</strong> Try changes before going live</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Two Ways to Write It</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Declarative (Say WHAT)</h4>
            <ul className="space-y-1">
              <li>• Describe the end result you want</li>
              <li>• Azure figures out how to get there</li>
              <li>• Examples: ARM templates, Bicep, Terraform</li>
              <li>• Focus on "what" should exist</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Imperative (Say HOW)</h4>
            <ul className="space-y-1">
              <li>• Write step-by-step commands</li>
              <li>• Tell Azure every step</li>
              <li>• Examples: Azure CLI scripts, PowerShell</li>
              <li>• Focus on "how" to build it</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>IaC Tool</th>
              <th>Approach</th>
              <th>Language</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ARM Templates</td>
              <td>Declarative</td>
              <td>JSON</td>
              <td>Azure-only setups, complex dependencies</td>
            </tr>
            <tr>
              <td>Bicep</td>
              <td>Declarative</td>
              <td>Its own simple language</td>
              <td>Azure-only setups with easier syntax</td>
            </tr>
            <tr>
              <td>Terraform</td>
              <td>Declarative</td>
              <td>HCL (HashiCorp style)</td>
              <td>Multi-cloud setups, large infrastructure</td>
            </tr>
            <tr>
              <td>Azure CLI scripts</td>
              <td>Imperative</td>
              <td>Command-line syntax</td>
              <td>Simple automation, scripts, one-offs</td>
            </tr>
            <tr>
              <td>PowerShell</td>
              <td>Imperative</td>
              <td>PowerShell syntax</td>
              <td>Windows-style automation, complex scripts</td>
            </tr>
            <tr>
              <td>Pulumi</td>
              <td>Declarative</td>
              <td>Regular languages (Python, JavaScript, etc.)</td>
              <td>Devs who prefer normal coding languages</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">IaC Good Habits</h3>
        <ul className="space-y-2">
          <li>• <strong>Keep it in source control</strong> to track and manage changes</li>
          <li>• <strong>Use CI/CD pipelines</strong> for infrastructure changes</li>
          <li>• <strong>Build reusable pieces</strong> to avoid repeating yourself</li>
          <li>• <strong>Use parameters</strong> so one template works in many places</li>
          <li>• <strong>Test your code</strong> before deploying</li>
          <li>• <strong>Document</strong> with comments and READMEs</li>
          <li>• <strong>Have a change approval process</strong></li>
          <li>• <strong>Keep secrets safe</strong> with a secrets manager</li>
        </ul>
      </div>

      <h2>Azure Resource Manager (ARM) and ARM Templates</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Resource Manager (The Engine Under the Hood)</h3>
        <p className="mb-4">
          ARM is the <strong>behind-the-scenes engine that creates, updates, and deletes your Azure resources.</strong> 
          Everything you do — portal, CLI, templates — goes through ARM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• One consistent management layer</li>
              <li>• Groups resources together</li>
              <li>• Access control (RBAC)</li>
              <li>• Tags for organization</li>
              <li>• Billing by resource group</li>
              <li>• Handles dependencies</li>
              <li>• Template-based deployment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">What It Gives You</h4>
            <ul className="space-y-1">
              <li>• Manage infrastructure with templates</li>
              <li>• Deploy, manage, and watch as a group</li>
              <li>• Redo the same deployment anytime</li>
              <li>• Define how resources depend on each other</li>
              <li>• Apply access control to every service</li>
              <li>• Tag resources for clarity</li>
              <li>• See costs grouped by tags</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">ARM Templates (The Blueprint Files)</h3>
          <p className="mb-3">
            ARM templates are <strong>JSON files that describe your whole Azure setup</strong> — 
            the infrastructure and its settings.
          </p>
          <h4 className="font-medium mt-4 mb-2">Template Sections:</h4>
          <ul className="space-y-1">
            <li>• <strong>$schema:</strong> Where the JSON format rules live</li>
            <li>• <strong>contentVersion:</strong> Your template's version (e.g., 1.0.0.0)</li>
            <li>• <strong>parameters:</strong> Values you plug in when deploying</li>
            <li>• <strong>variables:</strong> Reusable values for convenience</li>
            <li>• <strong>functions:</strong> Helper functions you define</li>
            <li>• <strong>resources:</strong> The actual things to build or update</li>
            <li>• <strong>outputs:</strong> Values returned after deploying</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Bicep (The Easier Way to Write Templates)</h3>
          <p className="mb-3">
            Bicep is a <strong>simpler language that automates writing ARM templates</strong> — 
            less typing, fewer mistakes.
          </p>
          <h4 className="font-medium mt-4 mb-2">Why Bicep:</h4>
          <ul className="space-y-1">
            <li>• Simpler to write than JSON</li>
            <li>• Easier to split into pieces</li>
            <li>• Catches mistakes earlier</li>
            <li>• Auto-complete and validation</li>
            <li>• Much easier to read</li>
            <li>• Handles dependencies for you</li>
            <li>• Turns into ARM JSON behind the scenes</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Same Job: ARM Template vs. Bicep</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">ARM Template (JSON)</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
      "type": "string",
      "metadata": {
        "description": "Storage Account Name"
      }
    }
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2021-04-01",
      "name": "[parameters('storageAccountName')]",
      "location": "[resourceGroup().location]",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2"
    }
  ]
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium mb-2">Bicep</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`param storageAccountName string {
  metadata: {
    description: 'Storage Account Name'
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageAccountName
  location: resourceGroup().location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Ways to Deploy a Template</h3>
        <ul className="space-y-2">
          <li>• <strong>Azure portal:</strong> Use the "Deploy a custom template" option</li>
          <li>• <strong>Azure CLI:</strong> Use the <code>az deployment group create</code> command</li>
          <li>• <strong>PowerShell:</strong> Use the <code>New-AzResourceGroupDeployment</code> cmdlet</li>
          <li>• <strong>REST API:</strong> Call the Resource Group Deployments API</li>
          <li>• <strong>GitHub Actions:</strong> Use the Azure Resource Manager deploy action</li>
          <li>• <strong>Azure DevOps:</strong> Use the ARM template deployment task</li>
          <li>• <strong>ARM Template Toolkit:</strong> Use AzTS to check templates</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Azure Portal:</strong> The web-based dashboard for building, managing, and watching everything with clicks.
        </li>
        <li>
          <strong>Azure Cloud Shell:</strong> A command-line in your browser, with Bash (CLI) and PowerShell options.
        </li>
        <li>
          <strong>Azure CLI:</strong> Command-line management using <code>az</code> commands in Bash.
        </li>
        <li>
          <strong>Azure PowerShell:</strong> Command-line management using Verb-Noun PowerShell cmdlets.
        </li>
        <li>
          <strong>Azure Arc:</strong> Brings Azure management to resources OUTSIDE Azure — on-premises, multicloud, and edge.
        </li>
        <li>
          <strong>Infrastructure as Code:</strong> Managing infrastructure with code, either declarative (what) or imperative (how).
        </li>
        <li>
          <strong>ARM Templates:</strong> JSON blueprints that define your Azure infrastructure and settings.
        </li>
        <li>
          <strong>Bicep:</strong> A simpler language that creates ARM templates with cleaner syntax and features.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the different ways to manage resources (Portal, CLI, PowerShell, templates)</li>
          <li>• Understand the differences between Azure CLI and Azure PowerShell</li>
          <li>• Know what Azure Arc does and what it can manage</li>
          <li>• Understand declarative vs. imperative IaC</li>
          <li>• Know the basic structure of ARM templates and each section's purpose</li>
          <li>• Be familiar with how Bicep relates to ARM templates</li>
          <li>• Understand how to deploy templates through various methods</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceManagementTopic;
