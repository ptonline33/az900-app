import React from 'react';

const CostManagementTopic: React.FC = () => {
  return (
    <div>
      <h1>Cost Management in Azure (Keeping Track of Your Bill)</h1>
      
      <p>
        Understanding how to manage and control costs is a big part of doing cloud right. 
        Azure gives you tools to <strong>see, analyze, and trim your spending</strong> so you 
        don't get surprised by a huge bill.
      </p>

      <h2>Why Your Azure Bill Is What It Is</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Type</h3>
          <p className="mb-3">
            Different services are billed differently, based on what they do and how you use them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• <strong>Compute:</strong> Pay for CPU time, memory</li>
            <li>• <strong>Storage:</strong> Pay for how much you keep, transactions</li>
            <li>• <strong>Networking:</strong> Pay for data transfer, bandwidth</li>
            <li>• <strong>PaaS:</strong> Pay for service capacity or usage</li>
            <li>• <strong>SaaS:</strong> Often pay per user or per month</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Consumption Model (How You Pay)</h3>
          <p className="mb-3">
            How you buy and use services can change your bill a lot.
          </p>
          <h4 className="font-medium mt-4 mb-2">Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Pay-as-you-go:</strong> Pay for what you use, no commitment</li>
            <li>• <strong>Reserved Instances:</strong> Pre-pay for 1-3 years for discounts</li>
            <li>• <strong>Spot Instances:</strong> Use spare capacity at cheaper rates</li>
            <li>• <strong>Savings Plans:</strong> Commit to hourly spend for discounts</li>
            <li>• <strong>Enterprise Agreement:</strong> Volume discounts and benefits</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Location (Which Region)</h3>
          <p className="mb-3">
            Azure prices differ by region because data centers cost different amounts to run.
          </p>
          <h4 className="font-medium mt-4 mb-2">Considerations:</h4>
          <ul className="space-y-1">
            <li>• Prices vary between regions</li>
            <li>• Weigh speed vs. cost trade-offs</li>
            <li>• Moving data between regions costs more</li>
            <li>• Rules may limit your region choices</li>
            <li>• Not every service is available everywhere</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Network Traffic (Data Movement)</h3>
          <p className="mb-3">
            Moving data can add up fast, especially for apps that use lots of bandwidth.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• Data coming in is usually free</li>
            <li>• Data going out is charged</li>
            <li>• Moving data between regions costs more</li>
            <li>• Traffic between zones may be charged</li>
            <li>• Content delivery networks can save money</li>
            <li>• ExpressRoute has different billing options</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Usage (How Efficiently You Use Things)</h3>
          <p className="mb-3">
            Wasting resources wastes money. Using them well saves money.
          </p>
          <h4 className="font-medium mt-4 mb-2">Ways to Optimize:</h4>
          <ul className="space-y-1">
            <li>• Right-size resources to match real needs</li>
            <li>• Shut down resources you aren't using</li>
            <li>• Turn on auto-scaling</li>
            <li>• Use cheaper tiers when they fit</li>
            <li>• Optimize storage usage and tier</li>
            <li>• Set up good cost governance</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="mb-2">Ways to Save Money</h3>
        <ul className="space-y-2">
          <li>• <strong>Use Azure Advisor cost tips</strong> to find savings</li>
          <li>• <strong>Auto-shut down dev/test machines</strong> so you don't pay for idle compute</li>
          <li>• <strong>Right-size underused resources</strong> based on real usage</li>
          <li>• <strong>Buy Reserved Instances</strong> for steady workloads to save up to 72%</li>
          <li>• <strong>Use Azure Hybrid Benefit</strong> if you own Windows Server or SQL Server licenses</li>
          <li>• <strong>Move rarely-used data</strong> to cheaper storage tiers</li>
          <li>• <strong>Delete unused resources</strong> like old disks, IPs, and network cards</li>
        </ul>
      </div>

      <h2>Pricing Calculator vs. Total Cost of Ownership (TCO) Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Pricing Calculator</h3>
          <p className="mb-3">
            A tool to <strong>estimate what Azure services will cost</strong> based on how you plan 
            to use them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Features:</h4>
          <ul className="space-y-1">
            <li>• Gives cost estimates for Azure services</li>
            <li>• Lets you tweak service settings</li>
            <li>• Supports pay-as-you-go and reserved options</li>
            <li>• Lets you run "what-if" cost planning</li>
            <li>• Shows region-specific prices</li>
            <li>• Creates shareable cost estimates</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Best For:</h4>
          <ul className="space-y-1">
            <li>• Planning future Azure setups</li>
            <li>• Budgeting for new projects</li>
            <li>• Comparing different service setups</li>
            <li>• Making cost proposals</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Total Cost of Ownership (TCO) Calculator</h3>
          <p className="mb-3">
            A tool to <strong>compare what you pay today (on-premises) vs. what Azure would cost</strong> — 
            helps you see if moving to the cloud saves money.
          </p>
          <h4 className="font-medium mt-4 mb-2">Features:</h4>
          <ul className="space-y-1">
            <li>• Compares on-premises vs. Azure costs</li>
            <li>• Includes hardware, software, network, and labor costs</li>
            <li>• Shows return on investment and payback time</li>
            <li>• Accounts for maintenance costs</li>
            <li>• Considers power, cooling, and datacenter costs</li>
            <li>• Creates detailed reports for decision-makers</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Best For:</h4>
          <ul className="space-y-1">
            <li>• Building the case to move to the cloud</li>
            <li>• Justifying cloud spending to leadership</li>
            <li>• Planning migration budgets</li>
            <li>• Understanding long-term cost impact</li>
          </ul>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Pricing Calculator</th>
              <th>TCO Calculator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main purpose</td>
              <td>Estimate Azure service costs</td>
              <td>Compare on-premises vs. Azure costs</td>
            </tr>
            <tr>
              <td>When you use it</td>
              <td>Planning future Azure setups</td>
              <td>Thinking of leaving current infrastructure</td>
            </tr>
            <tr>
              <td>What's included</td>
              <td>Azure services only</td>
              <td>Hardware, software, power, IT staff, etc.</td>
            </tr>
            <tr>
              <td>Typical timeframe</td>
              <td>Monthly and yearly estimates</td>
              <td>3-5 year cost comparison</td>
            </tr>
            <tr>
              <td>Who uses it</td>
              <td>Solution architects, developers</td>
              <td>Finance people, IT directors</td>
            </tr>
            <tr>
              <td>Level of detail</td>
              <td>Detailed service settings</td>
              <td>High-level infrastructure comparison</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cost Management Tools in Azure</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Cost Management + Billing</h3>
        <p className="mb-4">
          Azure's built-in cost tool that helps you <strong>watch, assign to teams, and trim</strong> 
          your cloud spending.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Cost Analysis</h4>
            <ul className="space-y-1 text-sm">
              <li>• Explore costs visually</li>
              <li>• See detailed cost breakdowns</li>
              <li>• Many charts and views</li>
              <li>• Filter by many things</li>
              <li>• Group and analyze spending</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Budgets</h4>
            <ul className="space-y-1 text-sm">
              <li>• Set spending limits</li>
              <li>• Get email warnings near limits</li>
              <li>• Trigger automation from budgets</li>
              <li>• Apply to a specific area</li>
              <li>• Track against forecasts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Alerts</h4>
            <ul className="space-y-1 text-sm">
              <li>• Budget alerts</li>
              <li>• Credit alerts</li>
              <li>• Department spending quota alerts</li>
              <li>• Adjustable thresholds</li>
              <li>• Email who you want</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-medium mb-2">Advisor Tips</h4>
            <ul className="space-y-1 text-sm">
              <li>• Right-sizing suggestions</li>
              <li>• Reserved Instance suggestions</li>
              <li>• Finds idle resources</li>
              <li>• Shows estimated savings</li>
              <li>• Tells you how to do it</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Exports</h4>
            <ul className="space-y-1 text-sm">
              <li>• Scheduled cost data exports</li>
              <li>• Export to a Storage Account</li>
              <li>• Works with other tools</li>
              <li>• Choose what data to export</li>
              <li>• CSV or JSON formats</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Cost Allocation</h4>
            <ul className="space-y-1 text-sm">
              <li>• Showback and chargeback</li>
              <li>• Rules for splitting costs</li>
              <li>• Resource tagging</li>
              <li>• Assign costs to teams/projects</li>
              <li>• Custom reporting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Reservations (Pay Ahead, Pay Less)</h3>
          <p className="mb-3">
            Pre-pay for <strong>1 or 3 years</strong> of resource use to get a big discount 
            compared to pay-as-you-go.
          </p>
          <h4 className="font-medium mt-4 mb-2">What You Can Reserve:</h4>
          <ul className="space-y-1">
            <li>• Virtual Machines (Reserved VM Instances)</li>
            <li>• SQL Database compute capacity</li>
            <li>• Azure Cosmos DB throughput</li>
            <li>• Azure Synapse Analytics</li>
            <li>• App Service Stamp Fee</li>
            <li>• Azure Storage</li>
            <li>• Azure Data Factory</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Perks:</h4>
          <ul className="space-y-1">
            <li>• Up to 72% savings vs. pay-as-you-go</li>
            <li>• Predictable budget</li>
            <li>• Priority capacity in some regions</li>
            <li>• Can exchange or return with a fee</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Hybrid Benefit (Reuse Your Old Licenses)</h3>
          <p className="mb-3">
            If you already own Windows Server or SQL Server licenses, <strong>reuse them in Azure</strong> 
            instead of paying full price.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Use your on-premises licenses in Azure</li>
            <li>• Save up to 40% on Windows Server VMs</li>
            <li>• Save up to 55% on SQL Server</li>
            <li>• Combine with Reservations for up to 80% off</li>
            <li>• For Software Assurance customers</li>
            <li>• Works with IaaS and PaaS services</li>
            <li>• License mobility for other products</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">The Cost-Saving Process</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Visibility</span>
            <p className="text-xs mt-1">Cost Analysis & Reporting</p>
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Accountability</span>
            <p className="text-xs mt-1">Tags & Cost Allocation</p>
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Optimization</span>
            <p className="text-xs mt-1">Right-sizing & Reservations</p>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2">
          <div className="col-start-5 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Governance</span>
            <p className="text-xs mt-1">Policies & Budgets</p>
          </div>
          <div className="col-start-4 flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="col-start-3 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Culture</span>
            <p className="text-xs mt-1">Education & Awareness</p>
          </div>
          <div className="col-start-2 flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="col-start-1 bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Planning</span>
            <p className="text-xs mt-1">Architecture & Forecasting</p>
          </div>
        </div>
      </div>

      <h2>What Are Tags? (Sticky Labels for Your Resources)</h2>
      
      <p className="mb-4">
        Tags are <strong>little name-value labels you can stick on resources</strong> (like "Department: 
        Finance" or "Environment: Production") to organize and track them.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Ways to Use Tags</h3>
          <ul className="space-y-2">
            <li>• <strong>Organize resources:</strong> Sort by purpose, environment, or anything else</li>
            <li>• <strong>Track costs:</strong> Charge costs to departments, projects, or teams</li>
            <li>• <strong>Manage resources:</strong> Easily find resources tied to a workload</li>
            <li>• <strong>Run operations:</strong> Group resources for policies or automation</li>
            <li>• <strong>Security:</strong> Label data by its sensitivity level</li>
            <li>• <strong>Rules and compliance:</strong> Identify resources for regulations</li>
            <li>• <strong>Optimize workloads:</strong> See all resources in a related workflow</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Common Tag Ideas</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Tag Category</th>
                  <th>Example Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Department</td>
                  <td>Finance, Marketing, HR</td>
                </tr>
                <tr>
                  <td>Environment</td>
                  <td>Production, Staging, Development</td>
                </tr>
                <tr>
                  <td>Cost Center</td>
                  <td>CC1234, CC5678</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td>Website Redesign, ERP Implementation</td>
                </tr>
                <tr>
                  <td>Application</td>
                  <td>CRM, E-commerce, Analytics</td>
                </tr>
                <tr>
                  <td>Owner</td>
                  <td>email@company.com</td>
                </tr>
                <tr>
                  <td>Business Criticality</td>
                  <td>Critical, High, Medium, Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Tag Limits and Good Habits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Limits</h4>
            <ul className="space-y-1">
              <li>• Max 50 tag name/value pairs per resource</li>
              <li>• Tag names max 512 characters</li>
              <li>• Tag values max 256 characters</li>
              <li>• Tags are NOT passed down from resource groups</li>
              <li>• Case-sensitive</li>
              <li>• Not every resource type supports tags</li>
              <li>• Can't apply to older "classic" resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Good Habits</h4>
            <ul className="space-y-1">
              <li>• Make one consistent tagging plan</li>
              <li>• Use Azure Policy to force tagging</li>
              <li>• Automate applying tags where you can</li>
              <li>• Use tags with cost management</li>
              <li>• Think about tag upkeep over time</li>
              <li>• Write down your tagging standards</li>
              <li>• Use lowercase and consistent formats</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Tags + Cost Management Together</h3>
        <ul className="space-y-2">
          <li>• <strong>Cost allocation:</strong> See costs broken down by tag in Cost Analysis</li>
          <li>• <strong>Budgets by tags:</strong> Create budgets for specific tag values</li>
          <li>• <strong>Exports with tags:</strong> Include tag info in exported cost data</li>
          <li>• <strong>Reports by tag:</strong> Make custom reports filtered by tags</li>
          <li>• <strong>Cost alerting:</strong> Set alerts for costs tied to specific tags</li>
          <li>• <strong>Charge-back models:</strong> Bill internal teams based on tag usage</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Cost Factors:</strong> Resource type, how you pay, region, network traffic, and efficiency all shape your bill.
        </li>
        <li>
          <strong>Pricing Calculator:</strong> Estimates future Azure deployment costs based on your settings.
        </li>
        <li>
          <strong>TCO Calculator:</strong> Compares on-premises vs. Azure costs to build the case for moving.
        </li>
        <li>
          <strong>Cost Management:</strong> Azure Cost Management + Billing helps you watch, analyze, and trim spending.
        </li>
        <li>
          <strong>Cost Optimization:</strong> Reservations, Hybrid Benefit, right-sizing, and automation save money.
        </li>
        <li>
          <strong>Tags:</strong> Labels that help you organize resources and track costs by team or project.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the main factors that affect Azure costs and how to trim them</li>
          <li>• Know when to use the Pricing Calculator vs. the TCO Calculator</li>
          <li>• Be familiar with Azure Cost Management + Billing features</li>
          <li>• Understand how Reservations and Hybrid Benefit cut costs</li>
          <li>• Know how tags help with cost tracking and organization</li>
          <li>• Be aware of tag limits and best practices</li>
        </ul>
      </div>
    </div>
  );
};

export default CostManagementTopic;
