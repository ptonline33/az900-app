import React from 'react';

const CloudBenefitsTopic: React.FC = () => {
  return (
    <div>
      <h1>Why People Use the Cloud (Its Benefits)</h1>
      
      <p>
        The cloud isn't just trendy — it genuinely solves real problems that owning your own computers creates.
        These benefits are also some of the most tested ideas on the AZ-900 exam, so it's worth getting comfortable with them.
      </p>

      <h2>High Availability and Scalability</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">High Availability (Staying Open)</h3>
          <p className="mb-3">
            This just means your app <strong>stays up and reachable even when things go wrong.</strong>
            If one machine breaks, another takes over so customers aren't affected.
          </p>
          <h4 className="font-medium mt-4 mb-2">How It's Done:</h4>
          <ul className="space-y-1">
            <li>• Written guarantees (SLAs) that the service won't be down</li>
            <li>• Multiple copies of things so no single part can take it all down</li>
            <li>• Spare environments ready to jump in</li>
            <li>• Data copied across multiple locations</li>
            <li>• Automatic switching to backup systems</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Scalability (Growing and Shrinking)</h3>
          <p className="mb-3">
            Scalability means <strong>you can add or remove power to match how busy you are</strong> — 
            so you're never too slow, but never paying for wasted power either.
          </p>
          <h4 className="font-medium mt-4 mb-2">Ways to Scale:</h4>
          <ul className="space-y-1">
            <li>• <strong>Vertical (Scale Up/Down):</strong> Make one machine bigger or smaller (add more CPU/RAM)</li>
            <li>• <strong>Horizontal (Scale Out/In):</strong> Add or remove machines to share the load</li>
            <li>• <strong>Automatic:</strong> It adjusts itself based on demand</li>
            <li>• <strong>Manual:</strong> A person changes it by hand</li>
            <li>• <strong>Scheduled:</strong> It scales on a set schedule (e.g., busier every evening)</li>
          </ul>
        </div>
      </div>

      <h2>Reliability and Predictability</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Reliability (Bouncing Back)</h3>
          <p className="mb-3">
            Reliability is about <strong>recovering after a failure</strong> and getting back to normal fast.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Ideas:</h4>
          <ul className="space-y-1">
            <li>• <strong>Disaster Recovery:</strong> A plan to recover from big disasters</li>
            <li>• <strong>Backup & Restore:</strong> Regular backups you can restore quickly</li>
            <li>• <strong>Geo-Replication:</strong> Copies of your data stored in far-away places</li>
            <li>• <strong>Traffic Management:</strong> Sending users around a problem spot</li>
            <li>• <strong>Health Monitoring:</strong> Catching problems before they hurt you</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Predictability (No Surprises)</h3>
          <p className="mb-3">
            Predictability means <strong>you can count on both performance and costs.</strong>
            You know how fast things will run and roughly what the bill will be.
          </p>
          <h4 className="font-medium mt-4 mb-2">Types of Predictability:</h4>
          <ul className="space-y-1">
            <li>• <strong>Performance:</strong> Steady, reliable speed with auto-scaling</li>
            <li>• <strong>Cost:</strong> Tools that help you forecast and control spending</li>
            <li>• <strong>Traffic:</strong> Planning for known busy periods</li>
            <li>• <strong>Capacity:</strong> Forecasting what you'll need in the future</li>
            <li>• <strong>Usage Analytics:</strong> Clear insight into what you're using</li>
          </ul>
        </div>
      </div>

      <h2>Security and Governance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Security (Keeping Things Safe)</h3>
          <p className="mb-3">
            Cloud providers spend billions on security so you don't have to. You get 
            <strong> enterprise-grade protection by default.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Security Benefits:</h4>
          <ul className="space-y-1">
            <li>• <strong>Physical Security:</strong> Locked-down data centers with many layers of protection</li>
            <li>• <strong>Identity Management:</strong> Strong ways to prove who someone is and what they can do</li>
            <li>• <strong>Threat Protection:</strong> Always-on monitoring that looks for attacks</li>
            <li>• <strong>Encryption:</strong> Scrambling your data so only the right people can read it</li>
            <li>• <strong>Compliance:</strong> Meeting industry rules and standards</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Governance (Setting the Rules)</h3>
          <p className="mb-3">
            Governance is about <strong>making sure everyone follows the house rules</strong> — 
            staying compliant, secure, and not wasting money.
          </p>
          <h4 className="font-medium mt-4 mb-2">Governance Features:</h4>
          <ul className="space-y-1">
            <li>• <strong>Policy Management:</strong> Write rules that the cloud enforces automatically</li>
            <li>• <strong>Access Control:</strong> Decide exactly who can do what</li>
            <li>• <strong>Resource Organization:</strong> Arrange your stuff in a logical order</li>
            <li>• <strong>Compliance Monitoring:</strong> Constantly checking that rules are being followed</li>
            <li>• <strong>Cost Management:</strong> Budgets and spending limits</li>
          </ul>
        </div>
      </div>

      <h2>Manageability (Easier to Run)</h2>
      
      <p className="mb-4">
        The cloud gives you two kinds of "easy to manage" — managing <strong>your</strong> stuff, 
        and letting Microsoft auto-manage <strong>their</strong> stuff:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Management Type</th>
              <th>Description</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Management of the Cloud</td>
              <td>How you control your own resources</td>
              <td>
                • Clickable web portal<br />
                • Command-line tools<br />
                • Programming interfaces (APIs/SDKs)<br />
                • Writing your setup as code (IaC)<br />
                • Automating routine tasks
              </td>
            </tr>
            <tr>
              <td>Management in the Cloud</td>
              <td>How Microsoft auto-manages the underlying stuff</td>
              <td>
                • Automatic updates and patching<br />
                • Auto-detecting and fixing hardware failures<br />
                • Built-in deployment tools<br />
                • Monitoring and alerts<br />
                • Automatic backup and recovery options
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flowchart mt-8">
        <h3 className="text-center mb-4">The Three Flavors of Cloud Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Day-to-Day (Operational)</h4>
            <ul className="space-y-1 text-sm">
              <li>• Less busywork for your team</li>
              <li>• Reachable from anywhere in the world</li>
              <li>• Faster to launch new things</li>
              <li>• Simpler management</li>
              <li>• Always kept up to date</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Technical</h4>
            <ul className="space-y-1 text-sm">
              <li>• Stays available (high availability)</li>
              <li>• Scales up and down</li>
              <li>• Survives failures (fault tolerance)</li>
              <li>• Runs on modern hardware</li>
              <li>• Recovers automatically</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Financial</h4>
            <ul className="space-y-1 text-sm">
              <li>• No big upfront buying costs</li>
              <li>• Only pay for what you use</li>
              <li>• Cheaper because of shared scale</li>
              <li>• Predictable running costs</li>
              <li>• Faster to get to market</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>High Availability:</strong> Stays reachable with minimal downtime through backups and auto-failover.
        </li>
        <li>
          <strong>Scalability:</strong> Add or remove power to match demand — bigger machines (vertical) or more machines (horizontal).
        </li>
        <li>
          <strong>Reliability:</strong> Bounces back after failures through disaster recovery, backups, and geo-replication.
        </li>
        <li>
          <strong>Predictability:</strong> You can depend on performance and forecast costs for better planning.
        </li>
        <li>
          <strong>Security:</strong> Strong protection through physical security, identity checks, threat defenses, and encryption.
        </li>
        <li>
          <strong>Governance:</strong> Rules, access control, and compliance monitoring keep everything in line.
        </li>
        <li>
          <strong>Manageability:</strong> Tools to manage your stuff, plus Microsoft auto-managing the rest.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know how each benefit solves a real business problem</li>
          <li>• See the difference between "staying available" (high availability) and "coming back after failure" (reliability)</li>
          <li>• Know the difference between vertical (bigger) and horizontal (more) scaling</li>
          <li>• Remember the shared responsibility model for security</li>
          <li>• Know both "management of the cloud" and "management in the cloud"</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudBenefitsTopic;
