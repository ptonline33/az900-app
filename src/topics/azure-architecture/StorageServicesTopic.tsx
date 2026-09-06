import React from 'react';

const StorageServicesTopic: React.FC = () => {
  return (
    <div>
      <h1>Azure Storage (Where Your Data Lives)</h1>
      
      <p>
        Azure Storage is Microsoft's <strong>cloud storage service.</strong> It's highly available, secure, 
        and can hold everything from photos to whole databases. The trick is picking the right type of storage 
        for your data.
      </p>

      <h2>The Different Kinds of Azure Storage</h2>
      
      <p className="mb-4">
        Think of these like different containers in your kitchen — each is designed for a different kind of thing:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Storage Service</th>
              <th>What It Is</th>
              <th>Good For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Blob Storage</td>
              <td>
                A giant folder for storing whole files (photos, videos, documents) — "object storage"
              </td>
              <td>
                • Images, videos, documents<br />
                • Backups and archives<br />
                • Data for analysis<br />
                • Hosting a simple website
              </td>
            </tr>
            <tr>
              <td>Azure Files</td>
              <td>
                Shared file folders you access like a normal network drive
              </td>
              <td>
                • Replacing your office file server<br />
                • App migration<br />
                • Sharing app settings<br />
                • Mixed on-premises/cloud setups
              </td>
            </tr>
            <tr>
              <td>Azure Queue Storage</td>
              <td>
                A message-holding line so different parts of an app can pass work to each other reliably
              </td>
              <td>
                • Connecting app pieces<br />
                • Background processing<br />
                • Handing out tasks<br />
                • Flexible architectures
              </td>
            </tr>
            <tr>
              <td>Azure Table Storage</td>
              <td>
                A simple NoSQL database for storing lots of small structured records
              </td>
              <td>
                • Big web-scale apps<br />
                • Address books<br />
                • Device info<br />
                • Other metadata
              </td>
            </tr>
            <tr>
              <td>Azure Disk Storage</td>
              <td>
                The "hard drives" attached directly to virtual machines
              </td>
              <td>
                • Operating-system disks<br />
                • Data disks for VMs<br />
                • Database storage<br />
                • Apps that need fast direct disk access
              </td>
            </tr>
            <tr>
              <td>Azure Data Lake Storage</td>
              <td>
                A huge warehouse made for big data analytics
              </td>
              <td>
                • Big data analytics<br />
                • Data warehousing<br />
                • IoT data processing<br />
                • Machine learning
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Storage Tiers (Hot, Cool, or Freezer?)</h2>
      
      <p className="mb-4">
        Think of storage tiers like <strong>how you store food:</strong> the fridge (hot — grab it often), 
        the pantry (cool — grab it sometimes), and the freezer (archive — rarely need it). The colder, 
        the cheaper to store but more work to get back.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Hot Tier</h3>
          <p className="mb-3 text-sm">
            For data you access all the time. Quick, but pricier to store.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Higher</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Lower</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>None</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Cool Tier</h3>
          <p className="mb-3 text-sm">
            For data you rarely access but keep for at least 30 days.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Medium</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Medium</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>30 days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Archive Tier</h3>
          <p className="mb-3 text-sm">
            For data you almost never need (kept 180+ days). Cheapest, but takes hours to get back.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Lowest</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>Highest</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>Offline</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>180 days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-lg font-medium mb-2">Cold Tier</h3>
          <p className="mb-3 text-sm">
            For data you access rarely and keep 90+ days — a middle ground between cool and archive.
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Storage Cost:</span>
              <span>Low</span>
            </div>
            <div className="flex justify-between">
              <span>Access Cost:</span>
              <span>High</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>Min Duration:</span>
              <span>90 days</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Managing Storage Tiers</h3>
        <ul className="space-y-2">
          <li>• <strong>Lifecycle Management:</strong> Automatically move data between tiers based on rules (e.g., "after 30 days, go cool")</li>
          <li>• <strong>Blob-level Tiering:</strong> Set a different tier for individual files</li>
          <li>• <strong>Account-level Tiering:</strong> Pick a default tier for everything in a storage account</li>
          <li>• <strong>Rehydration:</strong> Moving data "out of the freezer" (Archive) back to Hot/Cool</li>
          <li>• <strong>Priority Retrieval:</strong> Standard (up to 15 hours) or High (under 1 hour)</li>
        </ul>
      </div>

      <h2>Redundancy (Making Extra Copies of Your Data)</h2>
      
      <p className="mb-4">
        Redundancy means <strong>keeping extra copies of your data in different places</strong> so you 
        don't lose it. More copies = more safety, but also more cost.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">LRS — Copies in One Building</h3>
          <p className="mb-3">
            Copies your data <strong>3 times within one building.</strong> Protects against a single 
            drive/rack failing, but not a whole building disaster.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Cheapest option</li>
            <li>• 99.999999999% durability (11 nines)</li>
            <li>• Survives drive/rack failures</li>
            <li>• Won't survive a building-level disaster</li>
            <li>• Fine for non-critical data</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">ZRS — Copies Across Zones</h3>
          <p className="mb-3">
            Copies your data <strong>across 3 availability zones</strong> in the same region. Survives a 
            whole data center going down.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• 99.9999999999% durability (12 nines)</li>
            <li>• Survives data center failures</li>
            <li>• Stays available even if a zone fails</li>
            <li>• Only in regions with zones</li>
            <li>• Great for high-availability apps</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">GRS — Copies to Another Region</h3>
          <p className="mb-3">
            Copies your data <strong>to a far-away region</strong> (hundreds of miles away). Survives 
            an entire region going down.
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• LRS in the main region, plus LRS in a backup region</li>
            <li>• 99.99999999999999% durability (16 nines)</li>
            <li>• Must wait for Microsoft to trigger failover to read it</li>
            <li>• Survives regional outages</li>
            <li>• For important data needing geo-protection</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">GZRS — Zones Plus Another Region</h3>
          <p className="mb-3">
            The best of both: <strong>zone redundancy at home + a backup in another region.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• ZRS in main region, plus LRS in a backup region</li>
            <li>• 99.99999999999999% durability (16 nines)</li>
            <li>• Highest durability and availability</li>
            <li>• Survives zone AND region failures</li>
            <li>• For mission-critical data</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">RA-GRS — Readable Backup Region</h3>
          <p className="mb-3">
            Same as GRS, but you can <strong>also read the copy in the backup region.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• All GRS features</li>
            <li>• Read access to the backup region</li>
            <li>• Separate addresses for each region</li>
            <li>• Good for serving readers far away</li>
            <li>• Lets you test disaster recovery</li>
            <li>• Read available even during regional outages</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">RA-GZRS — Readable Zones + Region</h3>
          <p className="mb-3">
            GZRS plus read access to the backup region. <strong>Most availability, most expensive.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Characteristics:</h4>
          <ul className="space-y-1">
            <li>• All GZRS features</li>
            <li>• Read access to backup region</li>
            <li>• Highest availability</li>
            <li>• 99.99% read availability</li>
            <li>• Most expensive option</li>
            <li>• For max resilience</li>
          </ul>
        </div>
      </div>

      <h2>Storage Account Types</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">The Kinds of Storage Accounts</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Supported Services</th>
                <th>Redundancy</th>
                <th>Use Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard general-purpose v2</td>
                <td>Blob, File, Queue, Table, Data Lake Gen2</td>
                <td>LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS</td>
                <td>Most scenarios — the recommended default</td>
              </tr>
              <tr>
                <td>Premium block blobs</td>
                <td>Blob (block and append blobs)</td>
                <td>LRS, ZRS</td>
                <td>High transaction rates, small objects, low latency</td>
              </tr>
              <tr>
                <td>Premium file shares</td>
                <td>File</td>
                <td>LRS, ZRS</td>
                <td>Enterprise or high-performance apps</td>
              </tr>
              <tr>
                <td>Premium page blobs</td>
                <td>Blob (page blobs only)</td>
                <td>LRS</td>
                <td>VM disks, random read/write</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Storage Account Settings You Can Choose</h3>
        <ul className="space-y-2">
          <li>• <strong>Performance:</strong> Standard (magnetic) or Premium (SSD/fast)</li>
          <li>• <strong>Access Tier:</strong> Hot, Cool, Archive (for blob data)</li>
          <li>• <strong>Location:</strong> Which Azure region it lives in</li>
          <li>• <strong>Replication:</strong> How many copies and where (the redundancy above)</li>
          <li>• <strong>Security:</strong> Encryption, access control, firewall settings</li>
          <li>• <strong>Network Access:</strong> Public, private, or selected networks</li>
          <li>• <strong>Data Protection:</strong> Soft delete, point-in-time restore, immutable storage</li>
          <li>• <strong>Advanced:</strong> Hierarchical namespace, static website hosting, etc.</li>
        </ul>
      </div>

      <h2>Ways to Move and Manage Files</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">AzCopy (Command-line Helper)</h3>
          <p className="mb-3">
            A command-line tool for <strong>copying files to/from Azure Storage</strong> — fast and scriptable.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Fast bulk copying</li>
            <li>• Several login methods</li>
            <li>• Resumes interrupted transfers</li>
            <li>• Sync capabilities</li>
            <li>• Filter what to copy</li>
            <li>• Works between accounts/services</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Storage Explorer (Visual Helper)</h3>
          <p className="mb-3">
            A <strong>click-and-drag graphical app</strong> for managing your storage — like a file explorer 
            for the cloud.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Easy-to-use interface</li>
            <li>• Drag-and-drop upload/download</li>
            <li>• Access to all storage services</li>
            <li>• Generate access links (SAS tokens)</li>
            <li>• Works on Windows, macOS, Linux</li>
            <li>• Full file/folder operations</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure File Sync (Keep It in Sync)</h3>
          <p className="mb-3">
            <strong>Keeps your office file server and Azure in sync</strong> — put files in Azure, still 
            access them locally.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Centralizes files in Azure</li>
            <li>• Sync across multiple sites</li>
            <li>• Cloud tiering (keeps rarely-used files in cloud)</li>
            <li>• Disaster recovery</li>
            <li>• Fast local access</li>
            <li>• Works with Windows Server</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Other Ways to Move Files</h3>
        <ul className="space-y-2">
          <li>• <strong>Azure Portal:</strong> Simple web upload/download for small files</li>
          <li>• <strong>REST API:</strong> Programmatic access for custom apps</li>
          <li>• <strong>Storage SDKs:</strong> Code libraries for many languages</li>
          <li>• <strong>Azure Data Factory:</strong> Moving large amounts of data</li>
          <li>• <strong>Azure Import/Export:</strong> Ship physical disks for huge datasets</li>
          <li>• <strong>Azure Data Box:</strong> Physical devices for offline migration</li>
        </ul>
      </div>

      <h2>Migrating to Azure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Migrate (The Moving Company)</h3>
          <p className="mb-3">
            A central place to <strong>assess and move your on-premises stuff to Azure</strong> — servers, 
            apps, databases, and data.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Find and assess what you have</li>
            <li>• Move servers</li>
            <li>• Move databases</li>
            <li>• Move web apps</li>
            <li>• Move virtual desktops</li>
            <li>• Move data</li>
            <li>• See how things depend on each other</li>
            <li>• Track progress</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Data Box (Ship the Data)</h3>
          <p className="mb-3">
            For <strong>huge amounts of data</strong> that are too slow to move over the internet — 
            Microsoft ships you a physical device to fill and send back.
          </p>
          <h4 className="font-medium mt-4 mb-2">Data Box Options:</h4>
          <ul className="space-y-1">
            <li>• <strong>Data Box Disk:</strong> SSDs for smaller datasets (up to 40 TB)</li>
            <li>• <strong>Data Box:</strong> Rugged device (up to 100 TB)</li>
            <li>• <strong>Data Box Heavy:</strong> For very large datasets (up to 1 PB)</li>
            <li>• <strong>Data Box Gateway:</strong> Virtual appliance for ongoing transfers</li>
            <li>• <strong>Data Box Edge:</strong> On-site AI-enabled edge computing device</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Specialized Migration Services</h3>
        <ul className="space-y-2">
          <li>• <strong>Database Migration Service:</strong> Move databases with minimal downtime</li>
          <li>• <strong>Site Recovery:</strong> Disaster recovery/migration for VMs</li>
          <li>• <strong>Azure File Sync:</strong> Sync office file servers with Azure Files</li>
          <li>• <strong>Azure StorSimple:</strong> Hybrid storage for enterprise workloads</li>
          <li>• <strong>Partner Solutions:</strong> Third-party migration tools</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Storage Services:</strong> Blob, Files, Queue, Table, Disk, and Data Lake each fit different needs.
        </li>
        <li>
          <strong>Storage Tiers:</strong> Hot, Cool, Cold, and Archive balance speed, availability, and cost.
        </li>
        <li>
          <strong>Redundancy:</strong> LRS, ZRS, GRS, GZRS, RA-GRS, RA-GZRS give different safety levels.
        </li>
        <li>
          <strong>Account Types:</strong> Different account types support different services and options.
        </li>
        <li>
          <strong>File Tools:</strong> AzCopy, Storage Explorer, and File Sync are the main ways to move files.
        </li>
        <li>
          <strong>Migration:</strong> Azure Migrate and Data Box help move on-premises data to Azure.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Match the right storage service to the data type/scenario</li>
          <li>• Understand the storage tier trade-offs</li>
          <li>• Know the redundancy options and what they protect against</li>
          <li>• Know which storage account type fits which need</li>
          <li>• Know the right file-moving tool for the job</li>
          <li>• Be aware of the migration options for moving to Azure</li>
        </ul>
      </div>
    </div>
  );
};

export default StorageServicesTopic;
