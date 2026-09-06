import React from 'react';

const CoreComponentsTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure's Core Building Blocks</h1>
      
      <p>
        Azure organizes everything — your machines, your storage, your websites — into a neat hierarchy. 
        Think of it like a city: countries, states, cities, houses, and rooms. Understanding this layout 
        helps you keep your stuff organized, secure, and under control.
      </p>

      <h2>Where Your Stuff Lives: Regions, Region Pairs, and Special Regions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Regions</h3>
          <p>
            A region is a <strong>geographic area containing one or more data centers</strong> close together 
            and wired to each other. It's basically a "city" of Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• 60+ regions around the world</li>
            <li>• Available in 140+ countries</li>
            <li>• Lets you put things near your customers</li>
            <li>• Some services are only in certain regions</li>
            <li>• Your region affects your reliability guarantees</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Region Pairs</h3>
          <p>
            Each region has a "buddy" region <strong>at least 300 miles away</strong> in the same part of 
            the world. If one goes down, the other can take over.
          </p>
          <h4 className="font-medium mt-4 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            <li>• They're far apart, so one disaster rarely hits both</li>
            <li>• Microsoft auto-copies some data between them</li>
            <li>• If one fails, the other is prioritized for recovery</li>
            <li>• Updates are rolled out to one at a time to limit downtime</li>
            <li>• Data stays in the same region for tax/law reasons</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Special (Sovereign) Regions</h3>
          <p>
            Some governments need <strong>Azure separated from the main public cloud</strong> for legal 
            or security reasons. These are isolated, private Azures.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples:</h4>
          <ul className="space-y-1">
            <li>• <strong>Azure China:</strong> Run by a local partner (21Vianet)</li>
            <li>• <strong>Azure Government:</strong> For US government agencies and partners</li>
            <li>• <strong>Azure Government Secret:</strong> For US intelligence agencies</li>
            <li>• <strong>Azure Government Top Secret:</strong> For classified data</li>
          </ul>
        </div>
      </div>

      <h2>Availability Zones (Your Safety Net Within a Region)</h2>
      
      <p className="mb-4">
        Within one region (city), there are multiple <strong>Availability Zones (neighborhoods).</strong> 
        Each zone is its own set of data centers with independent power, cooling, and networking. 
        If one neighborhood's power fails, the others keep working.
      </p>
      
      <div className="flowchart mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 1</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 2</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Zone 3</h4>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
                Datacenter
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="inline-block bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg">
            <span className="font-medium">One Single Azure Region (the "city")</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Availability Zones</h3>
        <ul className="space-y-2">
          <li>• Built to survive a data center going down</li>
          <li>• Physically separate but connected by fast, private cables</li>
          <li>• Used for important apps that must stay up</li>
          <li>• Give a 99.99% uptime guarantee when set up right</li>
          <li>• Not every region has zones</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Zone-redundant Services:</h4>
        <ul className="space-y-1">
          <li>• Services automatically spread across zones (e.g., zone-redundant storage)</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Zonal Services:</h4>
        <ul className="space-y-1">
          <li>• Resources stuck in one zone (e.g., VMs, managed disks)</li>
        </ul>
      </div>

      <h2>Azure Data Centers (The Physical Buildings)</h2>
      
      <p className="mb-4">
        Data centers are the <strong>huge buildings full of servers</strong> that make Azure work. 
        You almost never deal with them directly — you work at the region/zone level.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Data Centers</h3>
        <ul className="space-y-2">
          <li>• Spread around the globe to serve everyone</li>
          <li>• Microsoft invests billions in them</li>
          <li>• Heavily protected with strict access control</li>
          <li>• Increasingly powered by renewable energy</li>
          <li>• Customers don't go into them — it's all remote</li>
          <li>• You deploy to regions/zones, not to a specific building</li>
        </ul>
      </div>

      <h2>Resources and Resource Groups (Your Stuff and Its Boxes)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resources (Individual Items)</h3>
          <p className="mb-3">
            A resource is <strong>anything you create in Azure</strong> — a virtual machine, a storage 
            account, a database, a web app. They're the building blocks.
          </p>
          <h4 className="font-medium mt-4 mb-2">Examples of Resources:</h4>
          <ul className="space-y-1">
            <li>• Virtual machines</li>
            <li>• Storage accounts</li>
            <li>• Web apps</li>
            <li>• Databases</li>
            <li>• Virtual networks</li>
            <li>• IoT hubs</li>
            <li>• AI/ML services</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Resource Groups (Labels/Boxes)</h3>
          <p className="mb-3">
            A resource group is a <strong>container that holds related resources together.</strong>
            Each resource can only live in one group at a time.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Groups things with the same purpose/lifecycle</li>
            <li>• Organize by billing, area, or how long they live</li>
            <li>• Add/remove resources anytime</li>
            <li>• Move resources between groups</li>
            <li>• Can't nest groups inside groups</li>
            <li>• Apply rules at the group level</li>
            <li>• Delete everything in a group in one go</li>
          </ul>
        </div>
      </div>

      <h2>Subscriptions (Your Billing Container)</h2>
      
      <p className="mb-4">
        A subscription is a <strong>billing and access container.</strong> Everything you use inside one 
        subscription shows up on one bill. You can have multiple subscriptions (one per department, project, etc.).
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Key Points about Subscriptions</h3>
        <ul className="space-y-2">
          <li>• Decides who's allowed to use Azure and what they can use</li>
          <li>• The boundary for billing and payment</li>
          <li>• Each subscription gets its own bill/invoice</li>
          <li>• May have usage limits or quotas</li>
          <li>• Used to split things by department, project, or environment</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Subscription Types:</h4>
        <ul className="space-y-1">
          <li>• <strong>Free trial:</strong> 12 months of free stuff, $200 credit for 30 days, plus always-free services</li>
          <li>• <strong>Pay-as-you-go:</strong> You link a card and pay for what you use</li>
          <li>• <strong>Enterprise Agreement:</strong> For big companies with yearly commitments</li>
          <li>• <strong>Student:</strong> $100 credit for 12 months, no card needed</li>
          <li>• <strong>CSP (Cloud Solution Provider):</strong> Bought through a Microsoft partner</li>
        </ul>
      </div>

      <h2>Management Groups (Organizing Your Subscriptions)</h2>
      
      <p className="mb-4">
        Management groups sit <strong>above subscriptions</strong> and let you apply rules to many 
        subscriptions at once — like a manager who sets the rules for several departments.
      </p>
      
      <div className="flowchart mb-6">
        <h3 className="text-center mb-4">The Azure Hierarchy</h3>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Management Groups</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Subscriptions</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Resource Groups</span>
          </div>
          <div className="h-6 border-l-2 border-gray-300 dark:border-gray-500"></div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-64 text-center">
            <span className="font-medium">Resources</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
        <h3 className="mb-3">Key Points about Management Groups</h3>
        <ul className="space-y-2">
          <li>• Can contain other groups and subscriptions</li>
          <li>• Up to 10,000 management groups per directory</li>
          <li>• Up to six levels deep (not counting the root)</li>
          <li>• Each group/subscription has only one parent</li>
          <li>• Apply rules (policies, access) to many subscriptions at once</li>
        </ul>
        
        <h4 className="font-medium mt-4 mb-2">Common Uses:</h4>
        <ul className="space-y-1">
          <li>• <strong>Organizing:</strong> Build a structure that matches your company</li>
          <li>• <strong>Policy inheritance:</strong> Rules set at the top flow down to everything below</li>
          <li>• <strong>Access control:</strong> Give access once at the group level, it applies everywhere below</li>
          <li>• <strong>Budgeting/reporting:</strong> See costs rolled up across the whole company</li>
        </ul>
      </div>

      <h2>The Full Hierarchy (How It All Fits)</h2>
      
      <p className="mb-4">
        Here's the complete ladder. <strong>Rules set at the top "trickle down"</strong> to everything below:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Covers</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Management Groups</td>
              <td>Multiple subscriptions</td>
              <td>
                • Bundle subscriptions together<br />
                • Apply company-wide rules<br />
                • Give a clean structure
              </td>
            </tr>
            <tr>
              <td>Subscriptions</td>
              <td>Multiple resource groups</td>
              <td>
                • Billing boundary<br />
                • Access boundary<br />
                • Scale limit boundary
              </td>
            </tr>
            <tr>
              <td>Resource Groups</td>
              <td>Multiple resources</td>
              <td>
                • Container for related resources<br />
                • Group things with the same lifecycle<br />
                • Apply rules at the group level
              </td>
            </tr>
            <tr>
              <td>Resources</td>
              <td>Individual services</td>
              <td>
                • The actual services you use<br />
                • Specific instances of services<br />
                • The building blocks of your solution
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">How Rules Flow Down the Hierarchy</h3>
        <ul className="space-y-2">
          <li>• <strong>Policy inheritance:</strong> Rules at the top apply to everything below</li>
          <li>• <strong>Access inheritance:</strong> Permissions granted up high flow down</li>
          <li>• <strong>Overrides:</strong> Lower levels can make exceptions to inherited rules</li>
          <li>• <strong>Strategy:</strong> Design your hierarchy to match your company or workloads</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Regions:</strong> Geographic areas with one or more data centers where you deploy stuff.
        </li>
        <li>
          <strong>Region Pairs:</strong> Two regions paired for disaster recovery, at least 300 miles apart.
        </li>
        <li>
          <strong>Sovereign Regions:</strong> Isolated Azures for compliance and legal reasons.
        </li>
        <li>
          <strong>Availability Zones:</strong> Separate data centers within a region that protect against failures.
        </li>
        <li>
          <strong>Resources:</strong> The basic building blocks (VMs, storage, web apps, etc.).
        </li>
        <li>
          <strong>Resource Groups:</strong> Containers that hold related resources together.
        </li>
        <li>
          <strong>Subscriptions:</strong> Containers for resource groups, tied to billing and access.
        </li>
        <li>
          <strong>Management Groups:</strong> Bundles of subscriptions for company-wide governance.
        </li>
        <li>
          <strong>Hierarchy:</strong> Management Groups {'>'} Subscriptions {'>'} Resource Groups {'>'} Resources.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the difference between regions, zones, and data centers</li>
          <li>• Know why region pairs exist and what they give you</li>
          <li>• Be able to explain the resource hierarchy and each level's job</li>
          <li>• Understand how rules and access flow down the hierarchy</li>
          <li>• Know the limits and rules of each level</li>
        </ul>
      </div>
    </div>
  );
};

export default CoreComponentsTopic;
