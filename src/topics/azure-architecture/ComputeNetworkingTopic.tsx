import React from 'react';

const ComputeNetworkingTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure Compute and Networking (Running & Connecting Things)</h1>
      
      <p>
        <strong>Compute</strong> is where you run your applications and do your work. <strong>Networking</strong> 
        is how everything talks to everything else. Together they're the foundation of most Azure solutions.
      </p>

      <h2>Three Ways to Run Your Code</h2>
      
      <p className="mb-4">
        Azure gives you a few options for running apps, from "you handle everything" to "Azure handles everything":
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Machines (VMs)</h3>
          <p className="mb-3">
            A VM is basically <strong>a pretend computer</strong> running in the cloud, complete with its own 
            "brain" (CPU), memory, and storage, and its own operating system.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Traits:</h4>
          <ul className="space-y-1">
            <li>• It's IaaS — you manage the OS</li>
            <li>• Full control of the operating system</li>
            <li>• Install anything you want</li>
            <li>• Run almost any application</li>
            <li>• You're responsible for updates and maintenance</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Containers</h3>
          <p className="mb-3">
            Containers are <strong>lightweight, self-contained bundles of an app</strong> and its needs. 
            They share the machine's base but stay separate from each other. Think lunchboxes on a shared table.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Traits:</h4>
          <ul className="space-y-1">
            <li>• Start way faster than VMs</li>
            <li>• Run the same anywhere (portable)</li>
            <li>• Each is isolated from the others</li>
            <li>• Use resources more efficiently</li>
            <li>• Deploy the same way every time</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Serverless Functions</h3>
          <p className="mb-3">
            Serverless is <strong>just your code, running when triggered</strong> — no servers to manage, ever.
            Like a vending machine response: "something happened? run this code."
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Traits:</h4>
          <ul className="space-y-1">
            <li>• No servers to manage</li>
            <li>• Pay only for the time your code runs</li>
            <li>• Scales automatically</li>
            <li>• Runs in response to events</li>
            <li>• Stateless — each run is independent</li>
          </ul>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Virtual Machines</th>
              <th>Containers</th>
              <th>Serverless Functions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Control over OS</td>
              <td>Full</td>
              <td>Partial</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Deployment Time</td>
              <td>Minutes</td>
              <td>Seconds</td>
              <td>Milliseconds</td>
            </tr>
            <tr>
              <td>Maintenance Overhead</td>
              <td>High</td>
              <td>Medium</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Billing Model</td>
              <td>Per VM/hour</td>
              <td>Per host/hour</td>
              <td>Per execution/GB-s</td>
            </tr>
            <tr>
              <td>Typical Workload</td>
              <td>Traditional applications</td>
              <td>Microservices</td>
              <td>Event processing</td>
            </tr>
            <tr>
              <td>Scaling</td>
              <td>Manual or auto-scale</td>
              <td>Orchestrator-managed</td>
              <td>Automatic</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Virtual Machine Options (Ways to Use VMs)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Virtual Machines</h3>
          <p className="mb-3">
            <strong>On-demand, scalable computers</strong> you can spin up whenever you need them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Many sizes and types to pick from</li>
            <li>• Windows or Linux</li>
            <li>• Custom images (ready-made setups)</li>
            <li>• Works with other Azure services</li>
            <li>• Pay-as-you-go pricing</li>
            <li>• Reserved for discounts</li>
            <li>• Spot for cheap batch work</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Machine Scale Sets</h3>
          <p className="mb-3">
            <strong>A team of identical VMs</strong> that can automatically grow or shrink as demand changes, 
            with traffic spread evenly among them.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automatic scaling</li>
            <li>• Balances the load across VMs</li>
            <li>• High availability</li>
            <li>• Auto-OS updates</li>
            <li>• Works with Azure Monitor</li>
            <li>• Up to 1,000 VM instances</li>
            <li>• Great for large apps</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Availability Sets</h3>
          <p className="mb-3">
            A <strong>smart grouping of VMs</strong> that makes sure they sit on different physical 
            hardware, so one hardware failure can't take them all down.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Ideas:</h4>
          <ul className="space-y-1">
            <li>• <strong>Fault Domains:</strong> Groups that share power and network switches — spread out so they don't fail together</li>
            <li>• <strong>Update Domains:</strong> Groups that can be rebooted together for updates without taking everything down</li>
            <li>• 99.95% uptime guarantee when used correctly</li>
            <li>• Protects against hardware failures and maintenance</li>
            <li>• Must be set up when creating the VMs</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Virtual Desktop</h3>
          <p className="mb-3">
            <strong>A full Windows desktop in the cloud</strong> that people can access from any device — 
            like having your office PC with you everywhere.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Windows 10/11, with many users per machine</li>
            <li>• Works great with Microsoft 365</li>
            <li>• Runs on Windows, Mac, iOS, Android</li>
            <li>• Secure with login management</li>
            <li>• Easier to manage</li>
            <li>• Keeps or resets desktops as needed</li>
            <li>• Works with user-profile tools like FSLogix</li>
          </ul>
        </div>
      </div>

      <h2>What a VM Needs (The Shopping List)</h2>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Required VM Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Compute (the "Brain")</h4>
            <ul className="space-y-1 text-sm">
              <li>• VM Size/SKU</li>
              <li>• CPU Cores</li>
              <li>• Memory (RAM)</li>
              <li>• Temporary Storage</li>
              <li>• VM Generation (Gen1/Gen2)</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Storage (the "Hard Drive")</h4>
            <ul className="space-y-1 text-sm">
              <li>• OS Disk</li>
              <li>• Data Disks</li>
              <li>• Disk Types (HDD/SSD/Premium/Ultra)</li>
              <li>• Disk Snapshots</li>
              <li>• Managed/Unmanaged Disks</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-3">Networking (the "Connections")</h4>
            <ul className="space-y-1 text-sm">
              <li>• Virtual Network</li>
              <li>• Subnet</li>
              <li>• Network Interface</li>
              <li>• Public IP (optional)</li>
              <li>• Network Security Group</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Extra VM Resources (Nice to Have)</h3>
        <ul className="space-y-2">
          <li>• <strong>VM Image:</strong> The template used to build the VM</li>
          <li>• <strong>Resource Group:</strong> The container that holds the VM and its friends</li>
          <li>• <strong>VM Extensions:</strong> Small add-ons for setup and automation after launch</li>
          <li>• <strong>Availability Options:</strong> Availability Set, Zone, or none</li>
          <li>• <strong>Backup:</strong> Azure Backup configuration</li>
          <li>• <strong>Monitoring:</strong> Azure Monitor, Log Analytics workspace</li>
          <li>• <strong>Security:</strong> Microsoft Defender for Cloud, disk encryption</li>
        </ul>
      </div>

      <h2>Ways to Host Your Application</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Hosting Option</th>
              <th>Description</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure App Service</td>
              <td>
                Fully managed platform to build, deploy, and scale web apps and APIs
              </td>
              <td>
                • Web applications<br />
                • API hosting<br />
                • Mobile app backends<br />
                • Business sites
              </td>
            </tr>
            <tr>
              <td>Azure Container Instances</td>
              <td>
                Run individual containers without managing servers
              </td>
              <td>
                • Simple apps<br />
                • Task automation<br />
                • Build jobs<br />
                • Small workloads
              </td>
            </tr>
            <tr>
              <td>Azure Kubernetes Service (AKS)</td>
              <td>
                Managed way to run many containers together with automation (orchestration)
              </td>
              <td>
                • Microservices<br />
                • Complex apps<br />
                • Large workloads<br />
                • DevOps practices
              </td>
            </tr>
            <tr>
              <td>Azure Functions</td>
              <td>
                Serverless — run code in response to events with no server management
              </td>
              <td>
                • Event processing<br />
                • Timer-based work<br />
                • Microservices<br />
                • API endpoints
              </td>
            </tr>
            <tr>
              <td>Azure Virtual Machines</td>
              <td>
                IaaS — you fully control the operating system and environment
              </td>
              <td>
                • Legacy applications<br />
                • Custom software<br />
                • Specialized workloads<br />
                • Dev/test environments
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Virtual Networks (Your Private Fenced Area)</h2>
      
      <p className="mb-4">
        An Azure Virtual Network (VNet) is <strong>your private, fenced-off network inside Azure.</strong>
        It's how your resources talk to each other and (if you want) to the outside world.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What a Virtual Network Does</h3>
        <ul className="space-y-2">
          <li>• <strong>Isolation/Segmentation:</strong> Keeps your workloads safely separate from each other</li>
          <li>• <strong>Internet Access:</strong> Lets things send/receive traffic to and from the internet</li>
          <li>• <strong>Resource Communication:</strong> Lets Azure resources talk to each other securely</li>
          <li>• <strong>On-premises Connection:</strong> Connects your own office networks to Azure</li>
          <li>• <strong>Traffic Filtering:</strong> Blocks/filters traffic between subnets with security groups</li>
          <li>• <strong>Routing:</strong> Controls how traffic moves, with custom routes</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Subnets (Rooms Inside the Fence)</h3>
          <p className="mb-3">
            A subnet is <strong>a slice of your network</strong> for splitting things up and applying 
            different rules to different parts.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            <li>• Logical divisions of a VNet</li>
            <li>• Each has its own unique address range</li>
            <li>• Different subnets can talk by default</li>
            <li>• Can be locked down separately</li>
            <li>• Some services need dedicated subnets</li>
            <li>• Some addresses in each subnet are reserved</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Virtual Network Peering</h3>
          <p className="mb-3">
            Peering <strong>joins two separate networks together</strong> so they act like one big network.
          </p>
          <h4 className="font-medium mt-4 mb-2">Types of Peering:</h4>
          <ul className="space-y-1">
            <li>• <strong>Regional Peering:</strong> Connecting networks in the same region</li>
            <li>• <strong>Global Peering:</strong> Connecting networks across regions</li>
            <li>• Fast, high-capacity connection</li>
            <li>• No downtime to set up</li>
            <li>• No "hop through a third network" — need direct links</li>
            <li>• Address ranges must not overlap</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure DNS (The Internet's Phone Book)</h3>
          <p className="mb-3">
            DNS translates <strong>friendly names (like google.com) into numbers (IP addresses).</strong>
            Azure DNS lets you host and manage these name translations in Azure.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Very reliable and always available</li>
            <li>• Supports public and private zones</li>
            <li>• Works with other Azure services</li>
            <li>• Auto-registers VMs in DNS</li>
            <li>• Custom DNS records</li>
            <li>• Private resolver for hybrid setups</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure VPN Gateway</h3>
          <p className="mb-3">
            A <strong>secure tunnel</strong> connecting your own network (or a single device) to Azure 
            over the internet, using encrypted VPN technology.
          </p>
          <h4 className="font-medium mt-4 mb-2">VPN Types:</h4>
          <ul className="space-y-1">
            <li>• <strong>Site-to-Site:</strong> Connects your whole office network to Azure</li>
            <li>• <strong>Point-to-Site:</strong> Connects one device to Azure</li>
            <li>• <strong>VNet-to-VNet:</strong> Connects Azure networks together (or use peering)</li>
            <li>• Uses encrypted tunnels (IPsec/IKE)</li>
            <li>• Several sizes/performance tiers</li>
            <li>• Zone-redundant gateways where available</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="text-xl font-medium mb-3">ExpressRoute (A Private Highway, Not Public Internet)</h3>
        <p className="mb-4">
          While VPN rides over the public internet, ExpressRoute is a <strong>private, dedicated connection</strong> 
          straight from your office to Microsoft's cloud — like a private highway instead of public roads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1">
              <li>• Doesn't use the public internet</li>
              <li>• Reliable, low-latency connection</li>
              <li>• More secure and private</li>
              <li>• Connects to Microsoft cloud services</li>
              <li>• Works globally across regions</li>
              <li>• Dynamic routing with BGP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Connection Models:</h4>
            <ul className="space-y-1">
              <li>• <strong>CloudExchange Co-location:</strong> At a shared carrier facility</li>
              <li>• <strong>Point-to-point Ethernet:</strong> Direct line from your office to Microsoft</li>
              <li>• <strong>Any-to-any:</strong> Through your existing network</li>
              <li>• <strong>Direct:</strong> Directly at Microsoft's peering locations</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Public vs. Private Endpoints (Who Can Knock?)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Public Endpoints</h3>
          <p className="mb-3">
            <strong>Open to the internet.</strong> Like a storefront with a public door — anyone can 
            come to the door, but you control who comes in.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Reachable from the internet</li>
            <li>• Protected with login and permissions</li>
            <li>• Can add firewalls and DDoS protection</li>
            <li>• Often used for customer-facing apps</li>
            <li>• Example: a web server with a public IP</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Private Endpoints</h3>
          <p className="mb-3">
            <strong>Only reachable from inside your network.</strong> Like a hidden door in a private 
            building — the public can't even find it.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Only reachable from within your VNet</li>
            <li>• Not exposed to the public internet</li>
            <li>• Extra security for sensitive data</li>
            <li>• Uses a private IP inside your network</li>
            <li>• Example: a database with a private endpoint</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">Security Notes</h3>
        <ul className="space-y-2">
          <li>• Use private endpoints for sensitive data and back-end services</li>
          <li>• Lock down public endpoints with login and permissions</li>
          <li>• Use network security groups to control traffic</li>
          <li>• Add Azure Firewall or WAF for extra protection</li>
          <li>• Follow the "least privilege" rule for access</li>
          <li>• Watch network traffic with Network Watcher and flow logs</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Compute Types:</strong> VMs (IaaS), containers, and serverless functions — each with different control and effort.
        </li>
        <li>
          <strong>VM Options:</strong> Azure VMs, Scale Sets, Availability Sets, and Virtual Desktop suit different needs.
        </li>
        <li>
          <strong>VM Needs:</strong> VMs require compute (CPU/memory), storage (disks), and networking (VNet, NIC).
        </li>
        <li>
          <strong>Hosting Options:</strong> Host apps with App Service, Containers, Kubernetes, Functions, or VMs.
        </li>
        <li>
          <strong>Virtual Networking:</strong> VNets provide isolation, segmentation, and connectivity.
        </li>
        <li>
          <strong>Connectivity:</strong> VPN Gateway (over the internet) vs. ExpressRoute (private connection).
        </li>
        <li>
          <strong>Endpoints:</strong> Public = internet-facing; private = only within your network.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the differences between compute types and when to use each</li>
          <li>• Know how to keep VMs available (Scale Sets, Availability Sets, Zones)</li>
          <li>• Know the core parts that make up a VM</li>
          <li>• Be familiar with the hosting options in Azure</li>
          <li>• Know how Azure networking components connect</li>
          <li>• Understand VPN Gateway vs. ExpressRoute</li>
          <li>• Know when to use public vs. private endpoints</li>
        </ul>
      </div>
    </div>
  );
};

export default ComputeNetworkingTopic;
