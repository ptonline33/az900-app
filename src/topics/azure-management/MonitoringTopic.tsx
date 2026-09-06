import React from 'react';

const MonitoringTopic: React.FC = () => {
  return (
    <div>
      <h1>Monitoring Tools in Azure (Keeping an Eye on Everything)</h1>
      
      <p>
        Azure has a full set of monitoring tools so you can <strong>watch the health, speed, and 
        availability</strong> of your apps and infrastructure. They help you spot problems, fix them, 
        and make smart decisions.
      </p>

      <h2>The Purpose of Azure Advisor (Your Free Personal Cloud Consultant)</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Is Azure Advisor?</h3>
        <p className="mb-4">
          Advisor is a <strong>free assistant that checks your setup and gives you tips</strong> to run 
          things better, faster, safer, and cheaper. It looks at how you use Azure and tells you what to improve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Tips tailored to your own setup</li>
              <li>• Watches for issues before they bite</li>
              <li>• Clear, do-this advice</li>
              <li>• Often a few clicks to apply</li>
              <li>• Free to use</li>
              <li>• Checks constantly</li>
              <li>• Puts the most important tips first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Why It Helps</h4>
            <ul className="space-y-1">
              <li>• Better performance and reliability</li>
              <li>• Stronger security</li>
              <li>• Finds ways to save money</li>
              <li>• Follows Azure best practices</li>
              <li>• Fixes things early</li>
              <li>• Uses resources wisely</li>
              <li>• Easy to apply suggestions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Cost</h3>
          <p className="mb-3">
            Tips to spend less on Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Remove unused resources</li>
            <li>• Right-size underused VMs</li>
            <li>• Buy reserved instances</li>
            <li>• Use cheaper storage tiers</li>
            <li>• Use Azure Hybrid Benefit</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Performance</h3>
          <p className="mb-3">
            Tips to make your apps faster.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Use managed disks</li>
            <li>• Premium storage for heavy use</li>
            <li>• Tune SQL DB performance</li>
            <li>• Add caching</li>
            <li>• Optimize network traffic</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">High Availability</h3>
          <p className="mb-3">
            Tips to keep things running when trouble hits.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Use availability sets</li>
            <li>• Add geo-redundancy</li>
            <li>• Use availability zones</li>
            <li>• Add load balancers</li>
            <li>• Set up backups</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Security</h3>
          <p className="mb-3">
            Tips to protect your data and apps.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Encrypt disks</li>
            <li>• Turn on MFA</li>
            <li>• Set up web app firewalls</li>
            <li>• Apply security updates</li>
            <li>• Use just-in-time VM access</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Operational Excellence</h3>
          <p className="mb-3">
            Tips to work more smoothly.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• Set up Azure Service Health</li>
            <li>• Use resource groups well</li>
            <li>• Use Azure Policy</li>
            <li>• Configure monitoring</li>
            <li>• Use Infrastructure as Code</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Working with Advisor</h3>
        <ul className="space-y-2">
          <li>• <strong>Open Advisor</strong> from the portal, CLI, PowerShell, or API</li>
          <li>• <strong>Filter tips</strong> by subscription, group, resource, or type</li>
          <li>• <strong>Set alerts</strong> so you hear about new tips</li>
          <li>• <strong>Postpone or dismiss</strong> tips that don't apply right now</li>
          <li>• <strong>Watch your score</strong> to see yourself improve</li>
          <li>• <strong>See the impact</strong> — saved money or faster apps</li>
          <li>• <strong>Export tips</strong> for reporting or offline review</li>
        </ul>
      </div>

      <h2>Azure Service Health (Is It You, or Is It Azure?)</h2>
      
      <p className="mb-4">
        Azure Service Health <strong>lets you know when Azure itself has problems</strong> that affect 
        you — outages, planned maintenance, or changes you should know about.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Status</h3>
          <p className="mb-3">
            A <strong>global "is everything OK?"</strong> board for all of Azure, everywhere.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Shows health of all Azure services</li>
            <li>• Current status everywhere</li>
            <li>• Past outage history</li>
            <li>• No login needed</li>
            <li>• At status.azure.com</li>
            <li>• NOT tailored to your resources</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Service Health</h3>
          <p className="mb-3">
            A <strong>personal view focused only on the services you actually use.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Personal dashboard of your services</li>
            <li>• Info on issues touching your stuff</li>
            <li>• Track ongoing problems</li>
            <li>• Set up alerts</li>
            <li>• Share info with your team</li>
            <li>• See planned maintenance</li>
            <li>• See health advisories</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Health</h3>
          <p className="mb-3">
            Health info about <strong>each specific resource you own</strong>, plus how to fix it.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Status of individual resources</li>
            <li>• Health history</li>
            <li>• Troubleshooting help</li>
            <li>• Resource-specific support</li>
            <li>• Report wrong status</li>
            <li>• Time ranges of health events</li>
            <li>• Availability numbers</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Kinds of Service Health Alerts</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Alert Type</th>
                <th>What It Is</th>
                <th>When You'd Use It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service issues</td>
                <td>Azure problems that affect you right now</td>
                <td>Hearing when a disruption hits your services</td>
              </tr>
              <tr>
                <td>Planned maintenance</td>
                <td>Upcoming maintenance that may affect you</td>
                <td>Planning around maintenance windows</td>
              </tr>
              <tr>
                <td>Health advisories</td>
                <td>Changes that need your attention</td>
                <td>Knowing about changes like retired features</td>
              </tr>
              <tr>
                <td>Security advisories</td>
                <td>Security-related notices</td>
                <td>Hearing about vulnerabilities and issues</td>
              </tr>
              <tr>
                <td>Resource health</td>
                <td>Status changes of your specific resources</td>
                <td>Knowing when a resource goes down or recovers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Service Health Good Habits</h3>
        <ul className="space-y-2">
          <li>• <strong>Set alerts for all your critical services and regions</strong></li>
          <li>• <strong>Use several notification methods</strong> (email, SMS, webhooks) for backup</li>
          <li>• <strong>Include everyone who needs to know</strong> in notifications</li>
          <li>• <strong>Connect to your IT tools</strong> with webhooks</li>
          <li>• <strong>Check Resource Health first</strong> before calling support</li>
          <li>• <strong>Review history</strong> when planning your service promises (SLAs)</li>
          <li>• <strong>Write down your response steps</strong> for each alert type</li>
        </ul>
      </div>

      <h2>Azure Monitor (The All-Seeing Eye)</h2>
      
      <p className="mb-4">
        Azure Monitor is the big umbrella tool that <strong>gathers, studies, and acts on data</strong> 
        from your cloud and on-premises systems. It answers "how is everything really doing?"
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">How Monitor Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Data Comes In</h4>
            <ul className="space-y-1 text-sm">
              <li>• App monitoring data</li>
              <li>• VM monitoring data</li>
              <li>• Azure resource data</li>
              <li>• Subscription data</li>
              <li>• Tenant data</li>
              <li>• Custom sources</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Where It's Stored</h4>
            <ul className="space-y-1 text-sm">
              <li>• Metrics data store</li>
              <li>• Logs data store</li>
              <li>• Change tracking</li>
              <li>• Performance data</li>
              <li>• Service map</li>
              <li>• Application map</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">What You Do With It</h4>
            <ul className="space-y-1 text-sm">
              <li>• Visuals and charts</li>
              <li>• Analysis</li>
              <li>• Alerts</li>
              <li>• Auto-scaling</li>
              <li>• Automation</li>
              <li>• Integration</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Metrics (The Numbers)</h3>
          <p className="mb-3">
            <strong>Numbers gathered on a regular schedule</strong> (like "CPU is 50%" every minute) 
            that describe how a system is doing.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Lightweight and near-real-time</li>
            <li>• Numbers stored by time</li>
            <li>• Great for alerts and quick detection</li>
            <li>• View them in Metrics Explorer</li>
            <li>• Collected on a set schedule</li>
            <li>• Known, defined structure</li>
            <li>• Kept for 93 days by default</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Logs (The Detailed Records)</h3>
          <p className="mb-3">
            <strong>Rich event records</strong> (like "user logged in" or "error thrown") with lots of detail 
            per entry.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Text or JSON event data with rich info</li>
            <li>• Stored in a Log Analytics workspace</li>
            <li>• Searched with Kusto Query Language (KQL)</li>
            <li>• Gathered when events happen (irregular)</li>
            <li>• Great for deep digging and fixes</li>
            <li>• Very flexible analysis</li>
            <li>• Can keep data up to 2 years</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Kinds of Data Can Monitor Collect</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">About Your Apps</h4>
            <ul className="space-y-1">
              <li>• <strong>Application Insights:</strong> Watches availability, speed, and usage of web apps</li>
              <li>• <strong>Dependency Tracking:</strong> Watches calls to databases and outside services</li>
              <li>• <strong>Client-side Data:</strong> How people use your browser/mobile app</li>
              <li>• <strong>Custom Events:</strong> Your own defined data points</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">About Your Infrastructure</h4>
            <ul className="space-y-1">
              <li>• <strong>VM Insights:</strong> Speed and dependencies of Windows/Linux VMs</li>
              <li>• <strong>Container Insights:</strong> How container workloads are doing</li>
              <li>• <strong>Platform Metrics:</strong> Health of Azure services themselves</li>
              <li>• <strong>Activity Logs:</strong> What's happening at the subscription level</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Log Analytics (Asking Your Logs Questions)</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Is Log Analytics?</h3>
        <p className="mb-4">
          Log Analytics is a tool in the portal for <strong>running search queries against your log data</strong> 
          to find patterns, errors, and answers — even across millions of records.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Search logs with KQL</li>
              <li>• Analyze millions of records fast</li>
              <li>• Turn results into charts</li>
              <li>• Save and share queries</li>
              <li>• Works across multiple workspaces</li>
              <li>• Advanced analysis abilities</li>
              <li>• Connects to alerts and dashboards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">The Workspace (Where Logs Live)</h4>
            <ul className="space-y-1">
              <li>• The central home for your log data</li>
              <li>• Data organized into tables</li>
              <li>• Each workspace has its own storage</li>
              <li>• Changeable retention settings</li>
              <li>• Access controlled with RBAC</li>
              <li>• Data stored in your region</li>
              <li>• View by resource or by workspace</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Kusto Query Language (KQL)</h3>
        <p className="mb-4">
          KQL is the <strong>search language for Azure Monitor logs.</strong> You chain steps together 
          with the pipe symbol (<code>|</code>).
        </p>
        <h4 className="font-medium mb-2">Example Queries:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`// The 10 newest errors
Event
| where EventLevel == "Error"
| project TimeGenerated, Source, EventID
| top 10 by TimeGenerated desc`}
            </pre>
          </div>
          <div>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto">
{`// CPU usage by computer, last 24 hrs
Perf
| where TimeGenerated > ago(24h)
| where CounterName == "% Processor Time"
| summarize AvgCPU = avg(CounterValue) by Computer
| order by AvgCPU desc`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Monitor Alerts (The Alarm System)</h3>
          <p className="mb-3">
            Alerts <strong>ping you when something important happens</strong> in your monitoring data.
          </p>
          <h4 className="font-medium mt-4 mb-2">Types:</h4>
          <ul className="space-y-1">
            <li>• <strong>Metric Alerts:</strong> Fire when a number crosses a limit</li>
            <li>• <strong>Log Alerts:</strong> Fire based on log query results</li>
            <li>• <strong>Activity Log Alerts:</strong> Fire on Azure-level events</li>
            <li>• <strong>Smart Detection:</strong> AI finds odd behavior</li>
            <li>• <strong>Web Test Alerts:</strong> Fire if your website goes down</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">What an Alert Can Do</h3>
          <p className="mb-3">
            When an alert fires, it can <strong>notify people or start automated actions.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Actions:</h4>
          <ul className="space-y-1">
            <li>• <strong>Email:</strong> Send mail to chosen people</li>
            <li>• <strong>SMS:</strong> Text certain phone numbers</li>
            <li>• <strong>Push:</strong> Notify on the Azure mobile app</li>
            <li>• <strong>Voice:</strong> Make an automated phone call</li>
            <li>• <strong>Webhook:</strong> Trigger outside systems</li>
            <li>• <strong>Logic App:</strong> Start a complex workflow</li>
            <li>• <strong>ITSM:</strong> Create a ticket in your IT tool</li>
            <li>• <strong>Runbook:</strong> Kick off an automation runbook</li>
          </ul>
        </div>
      </div>

      <h2>Application Insights (X-Ray Vision for Your Web App)</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Is Application Insights?</h3>
        <p className="mb-4">
          Application Insights is an add-on to Monitor that <strong>watches your web app in detail</strong> — 
          how users use it, where it's slow, and what's failing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              <li>• Watch the app live</li>
              <li>• See how users behave</li>
              <li>• Trace requests across parts</li>
              <li>• Track errors</li>
              <li>• Watch performance</li>
              <li>• Test availability</li>
              <li>• See the "application map"</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">What It Can Watch</h4>
            <ul className="space-y-1">
              <li>• ASP.NET, ASP.NET Core</li>
              <li>• Java apps</li>
              <li>• Node.js apps</li>
              <li>• Python apps</li>
              <li>• JavaScript single-page apps</li>
              <li>• Mobile apps (iOS, Android, more)</li>
              <li>• Any app via custom SDK or API</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Application Map</h3>
          <p className="mb-3">
            A <strong>picture of your app's parts and how they connect</strong>, to spot weak spots.
          </p>
          <h4 className="font-medium mt-4 mb-2">What It Shows:</h4>
          <ul className="space-y-1">
            <li>• Draws connections between parts</li>
            <li>• Shows speed on each connection</li>
            <li>• Shows failure rates</li>
            <li>• Click in for deep details</li>
            <li>• Tracks requests across parts</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Live Metrics</h3>
          <p className="mb-3">
            <strong>Watch your app in real time</strong> (about 1 second behind) to catch problems as they happen.
          </p>
          <h4 className="font-medium mt-4 mb-2">What It Shows:</h4>
          <ul className="space-y-1">
            <li>• Live performance numbers</li>
            <li>• Failures and errors as they happen</li>
            <li>• Dependency speed and rates</li>
            <li>• Almost no slowdown to your app</li>
            <li>• Live stream of request details</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Availability Tests</h3>
          <p className="mb-3">
            Regular <strong>checks that your app is up and responsive</strong> from many places around the world.
          </p>
          <h4 className="font-medium mt-4 mb-2">Test Types:</h4>
          <ul className="space-y-1">
            <li>• Simple URL ping test</li>
            <li>• Multi-step web test (real user flows)</li>
            <li>• Custom tracking tests</li>
            <li>• Tests from many locations</li>
            <li>• Alerts when availability drops</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Application Insights Good Habits</h3>
        <ul className="space-y-2">
          <li>• <strong>Turn it on early</strong> in development, not after launch</li>
          <li>• <strong>Use sampling</strong> to keep data volume and cost in check</li>
          <li>• <strong>Add your own metrics</strong> for business-specific events</li>
          <li>• <strong>Set up availability tests</strong> from several locations</li>
          <li>• <strong>Let Smart Detection find anomalies</strong> automatically</li>
          <li>• <strong>Build dashboards</strong> with your most important numbers</li>
          <li>• <strong>Set alerts</strong> for key performance limits and failures</li>
        </ul>
      </div>

      <h2>Azure Monitor Workbooks and Dashboards (Your Reporting Views)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Workbooks (Interactive Reports)</h3>
          <p className="mb-3">
            Mix <strong>text, charts, and live queries</strong> into rich, interactive reports.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Combine many data sources</li>
            <li>• Interactive filters</li>
            <li>• Rich visualizations</li>
            <li>• Share with your team</li>
            <li>• Fully customizable</li>
            <li>• Template gallery to start fast</li>
            <li>• Works with logs and metrics</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Dashboards (At-a-Glance Boards)</h3>
          <p className="mb-3">
            Put <strong>charts and numbers on one screen</strong> for a quick look at what matters.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• One unified view of your data</li>
            <li>• Adjustable layouts</li>
            <li>• Private, or shared with team</li>
            <li>• Pin things from many services</li>
            <li>• Markdown tiles for notes</li>
            <li>• Live-updating numbers</li>
            <li>• Works across subscriptions</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Workbooks vs. Dashboards</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Workbooks</th>
                <th>Dashboards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main purpose</td>
                <td>Interactive analysis and reports</td>
                <td>Quick at-a-glance monitoring</td>
              </tr>
              <tr>
                <td>Interactivity</td>
                <td>Highly interactive with filters</td>
                <td>Limited interactivity</td>
              </tr>
              <tr>
                <td>Data sources</td>
                <td>Many query types in one doc</td>
                <td>Separate tiles from different sources</td>
              </tr>
              <tr>
                <td>Text content</td>
                <td>Rich markdown and notes</td>
                <td>Only markdown tiles</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>A guided flow of analysis</td>
                <td>A grid of independent tiles</td>
              </tr>
              <tr>
                <td>Typical use</td>
                <td>Deep analysis, fixes, reports</td>
                <td>Daily ops monitoring, KPIs</td>
              </tr>
              <tr>
                <td>Time control</td>
                <td>Each section sets its own range</td>
                <td>One global time range</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Azure Advisor:</strong> Free personalized tips to optimize cost, performance, availability, security, and ops.
        </li>
        <li>
          <strong>Azure Service Health:</strong> Tells you when Azure has issues — via Azure Status, Service Health, and Resource Health.
        </li>
        <li>
          <strong>Azure Monitor:</strong> Collects, studies, and acts on data from cloud and on-premises, using both metrics and logs.
        </li>
        <li>
          <strong>Log Analytics:</strong> Search and analyze log data with KQL, stored in workspaces.
        </li>
        <li>
          <strong>Azure Monitor Alerts:</strong> Ping you when conditions are met, with many alert types and response actions.
        </li>
        <li>
          <strong>Application Insights:</strong> Deep performance monitoring for web apps — user behavior, tracing, performance.
        </li>
        <li>
          <strong>Workbooks:</strong> Interactive reports mixing text, queries, and visuals.
        </li>
        <li>
          <strong>Dashboards:</strong> At-a-glance boards consolidating data into one view.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the five Advisor recommendation categories</li>
          <li>• Know the differences between Azure Status, Service Health, and Resource Health</li>
          <li>• Understand how metrics and logs differ in Azure Monitor</li>
          <li>• Be familiar with Log Analytics and basic KQL</li>
          <li>• Know the alert types and actions in Azure Monitor</li>
          <li>• Understand Application Insights' key features</li>
          <li>• Know when to use Workbooks vs. Dashboards</li>
        </ul>
      </div>
    </div>
  );
};

export default MonitoringTopic;
