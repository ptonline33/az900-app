import React from 'react';

const GovernanceTopic: React.FC = () => {
  return (
    <div>
      <h1>Governance and Compliance in Azure (Keeping Things Under Control)</h1>
      
      <p>
        Governance is about <strong>setting the ground rules and making sure everyone follows them.</strong> 
        This includes following your own company policies, industry standards, and any laws you have to obey.
      </p>

      <h2>Microsoft Purview (Your Data Librarian and Guard)</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">What Is Microsoft Purview?</h3>
        <p className="mb-4">
          Purview is a "one-stop" tool for <strong>governing all your data</strong> — whether it's on-premises, 
          in multiple clouds, or in SaaS apps. It helps you <strong>find, understand, protect, and manage</strong> 
          your data everywhere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Data Governance (Organizing Your Data)</h4>
            <ul className="space-y-1">
              <li>• <strong>Data Map:</strong> Automatically finds and labels your data</li>
              <li>• <strong>Data Catalog:</strong> Search and explore data in one place</li>
              <li>• <strong>Data Lineage:</strong> Tracks where data came from and how it moved</li>
              <li>• <strong>Business Glossary:</strong> Standard meanings for business words</li>
              <li>• <strong>Data Sharing:</strong> Securely share data inside and outside your company</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Risk and Compliance (Protecting Your Data)</h4>
            <ul className="space-y-1">
              <li>• <strong>Information Protection:</strong> Find, label, and protect sensitive data</li>
              <li>• <strong>Data Loss Prevention:</strong> Stop data being sent to the wrong people</li>
              <li>• <strong>Compliance Management:</strong> Check and improve your rule-following</li>
              <li>• <strong>Risk Management:</strong> Spot and fix data risks</li>
              <li>• <strong>Insider Risk Management:</strong> Catch threats from inside the company</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Purview Data Map (The Map of Your Data)</h3>
          <p className="mb-3">
            Creates a <strong>map of everything you have</strong> — automatically finding, labeling, 
            and showing how data flows.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automatic data discovery everywhere</li>
            <li>• Labels data with sensitivity tags</li>
            <li>• Shows the full journey of data (lineage)</li>
            <li>• Connects to 200+ data sources</li>
            <li>• AI helps you understand your data</li>
            <li>• Flexible metadata management</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Purview Data Catalog (The Library of Your Data)</h3>
          <p className="mb-3">
            A <strong>searchable catalog</strong> of all your data so people can find and understand it.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Searchable list of data assets</li>
            <li>• Glossary that standardizes terms</li>
            <li>• Shows who owns each piece of data</li>
            <li>• Notes and descriptions for context</li>
            <li>• Works with Power BI and other tools</li>
            <li>• Lets data users collaborate</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Purview Information Protection (Guard the Sensitive Stuff)</h3>
          <p className="mb-3">
            <strong>Finds, labels, and protects</strong> your sensitive data wherever it lives.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Automatic discovery of sensitive data</li>
            <li>• Ready-made and custom labels</li>
            <li>• Labels data across all environments</li>
            <li>• Protection actions (encryption, access rules)</li>
            <li>• 200+ built-in sensitive-data patterns</li>
            <li>• AI-based trainers that learn</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Purview Compliance Manager (Your Rules Report Card)</h3>
          <p className="mb-3">
            Helps you <strong>track how well you follow the rules</strong> with a compliance score.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• A score that shows your progress</li>
            <li>• Pre-built checklists for many rules</li>
            <li>• Step-by-step things to improve</li>
            <li>• Collect and manage proof</li>
            <li>• Reports for auditors</li>
            <li>• Keeps you updated on new rules</li>
          </ul>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">Purview's Main Jobs</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Organize Data</span>
            <p className="text-xs mt-1">Map, Catalog, Lineage</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Protect & Follow Rules</span>
            <p className="text-xs mt-1">Protection, DLP, eDiscovery</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
            <span className="font-medium">Watch Insiders</span>
            <p className="text-xs mt-1">Communication, Behavior</p>
          </div>
        </div>
      </div>

      <h2>Azure Policy (The Rule Enforcer for Your Resources)</h2>
      
      <p className="mb-4">
        Azure Policy is like <strong>a referee for your Azure resources.</strong> It makes sure resources 
        follow your company's rules by checking each one and flagging or blocking anything out of line.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">The Main Building Blocks</h3>
          <ul className="space-y-2">
            <li>• <strong>Policy Definition:</strong> The rule itself — describes what's compliant and what to do if not</li>
            <li>• <strong>Policy Assignment:</strong> Where you apply the rule (a management group, subscription, or resource group)</li>
            <li>• <strong>Policy Effect:</strong> What happens when a rule is broken (warn, block, fix, etc.)</li>
            <li>• <strong>Policy Parameters:</strong> Variables that let one rule work in many places</li>
            <li>• <strong>Initiative Definition:</strong> A bundle of related rules aimed at one goal</li>
            <li>• <strong>Compliance Dashboard:</strong> See at a glance how compliant everything is</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">What Happens When a Rule Is Broken</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Effect</th>
                  <th>What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Audit</td>
                  <td>Logs a warning but still allows the action</td>
                </tr>
                <tr>
                  <td>Deny</td>
                  <td>Blocks the action and logs it</td>
                </tr>
                <tr>
                  <td>Append</td>
                  <td>Adds extra fields to the resource</td>
                </tr>
                <tr>
                  <td>Modify</td>
                  <td>Changes a resource's settings before creation</td>
                </tr>
                <tr>
                  <td>DeployIfNotExists</td>
                  <td>Creates related resources if they're missing</td>
                </tr>
                <tr>
                  <td>AuditIfNotExists</td>
                  <td>Warns if related resources are missing</td>
                </tr>
                <tr>
                  <td>Disabled</td>
                  <td>Rule not checked (handy for testing)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Common Ways to Use Azure Policy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li>• <strong>Consistent Resources:</strong> Force standardized setups</li>
            <li>• <strong>Follow Regulations:</strong> Enforce required controls</li>
            <li>• <strong>Security:</strong> Apply security rules across all resources</li>
            <li>• <strong>Cost Control:</strong> Limit types, sizes, or plans people can create</li>
            <li>• <strong>Tagging Rules:</strong> Make everyone tag resources properly</li>
          </ul>
          <ul className="space-y-2">
            <li>• <strong>Regional Limits:</strong> Restrict where resources can be created</li>
            <li>• <strong>Type Limits:</strong> Allow only certain resource types</li>
            <li>• <strong>Network Rules:</strong> Require specific network settings</li>
            <li>• <strong>Auto-Fixes:</strong> Automatically fix out-of-line resources</li>
            <li>• <strong>Protection:</strong> Stop important resources from being deleted/changed</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Azure Policy vs. RBAC (Rules vs. Permissions)</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Azure Policy</th>
                <th>RBAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus</td>
                <td>Are resources set up correctly?</td>
                <td>What is a person allowed to do?</td>
              </tr>
              <tr>
                <td>Intent</td>
                <td>Enforce resource standards</td>
                <td>Manage who can access what</td>
              </tr>
              <tr>
                <td>When it's checked</td>
                <td>When resources are made or changed</td>
                <td>On every user action</td>
              </tr>
              <tr>
                <td>How it works</td>
                <td>Policy definitions and assignments</td>
                <td>Role definitions and assignments</td>
              </tr>
              <tr>
                <td>What it governs</td>
                <td>Resource properties</td>
                <td>User actions and management</td>
              </tr>
              <tr>
                <td>Default state</td>
                <td>Anything allowed unless a rule forbids it</td>
                <td>No access until granted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Resource Locks (The "Do Not Delete" Sign)</h2>
      
      <p className="mb-4">
        Resource locks are <strong>safety locks that stop important resources from being deleted or changed</strong> 
        by accident — even by admins.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">The Two Kinds of Locks</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Read-only (ReadOnly)</h4>
            <ul className="space-y-1">
              <li>• Too tight to change anything</li>
              <li>• Can only look, not edit</li>
              <li>• Can't delete OR update</li>
              <li>• Like being a "Reader" in RBAC</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Delete only (CanNotDelete)</h4>
            <ul className="space-y-1">
              <li>• Stops deletion</li>
              <li>• Can still read and change settings</li>
              <li>• Can't be deleted</li>
              <li>• Everything works except delete</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Where Locks Apply (And How They Pass Down)</h3>
          <p className="mb-3">
            You can put a lock at different levels, and it affects everything below it.
          </p>
          <h4 className="font-medium mb-2">Levels:</h4>
          <ul className="space-y-1">
            <li>• <strong>Subscription:</strong> Locks everything in the whole subscription</li>
            <li>• <strong>Resource Group:</strong> Locks everything in that group</li>
            <li>• <strong>Single Resource:</strong> Locks just that one resource</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">Passing Down:</h4>
          <ul className="space-y-1">
            <li>• Locks apply to everything below them</li>
            <li>• Multiple locks can stack</li>
            <li>• The strictest lock wins</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Things to Know About Locks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Good Habits</h4>
            <ul className="space-y-1">
              <li>• Lock important production resources</li>
              <li>• Write down why a lock exists and who owns it</li>
              <li>• Think about how locks affect automation</li>
              <li>• Review locks now and then</li>
              <li>• Keep lock rules consistent everywhere</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Important Notes</h4>
            <ul className="space-y-1">
              <li>• Locks beat RBAC permissions</li>
              <li>• Even owners must remove the lock to delete</li>
              <li>• Needs the "Microsoft.Authorization/locks/*" permission</li>
              <li>• Owner and User Access Administrator can manage locks</li>
              <li>• Lock changes are logged</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">What Happens with a Lock</h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            You act
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            Permission check
          </div>
          <div className="flex items-center justify-center">
            <span>→</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
            Lock check
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-center">
              Lock stops it
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
              Allowed to proceed
            </div>
          </div>
        </div>
      </div>

      <h2>Service Trust Portal and Compliance Info</h2>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Microsoft Service Trust Portal (Proof That Microsoft Is Safe)</h3>
        <p className="mb-4">
          A portal with <strong>documents and tools about Microsoft's security, privacy, and rule-following</strong> — 
          so you can prove to auditors you're on safe, compliant ground.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">What's Inside</h4>
            <ul className="space-y-1">
              <li>• Compliance Manager</li>
              <li>• Trust Documents</li>
              <li>• Audit Reports</li>
              <li>• Compliance Guides</li>
              <li>• Data Protection Resources</li>
              <li>• Security Whitepapers</li>
              <li>• FAQs and Resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Why It Helps</h4>
            <ul className="space-y-1">
              <li>• See Microsoft's compliance certifications</li>
              <li>• Industry and regional compliance info</li>
              <li>• Transparency about how data is handled</li>
              <li>• Audit reports for Microsoft cloud services</li>
              <li>• Risk assessment tools</li>
              <li>• Guidance for protecting data</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Azure Compliance Documents</h3>
          <p className="mb-3">
            Microsoft provides deep documentation about Azure's compliance abilities.
          </p>
          <h4 className="font-medium mt-4 mb-2">Available:</h4>
          <ul className="space-y-1">
            <li>• Azure compliance documentation</li>
            <li>• Regional compliance guidance</li>
            <li>• Industry-specific compliance info</li>
            <li>• Compliance blueprints</li>
            <li>• Shared responsibility models</li>
            <li>• Best practices guides</li>
            <li>• Azure Security and Compliance Blueprint</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">The Rules Azure Meets</h3>
          <p className="mb-3">
            Azure follows a wide range of international and industry standards.
          </p>
          <h4 className="font-medium mt-4 mb-2">Main Categories:</h4>
          <ul className="space-y-1">
            <li>• <strong>Global:</strong> ISO 27001, ISO 27018, SOC 1, SOC 2, SOC 3</li>
            <li>• <strong>Government:</strong> FedRAMP, CJIS, DISA, DoD, NIST</li>
            <li>• <strong>Regional:</strong> GDPR, UK G-Cloud, Australia IRAP</li>
            <li>• <strong>Industry:</strong> HIPAA, HITRUST, PCI DSS, GLBA</li>
            <li>• <strong>Financial:</strong> SOX, PCI DSS, GLBA</li>
            <li>• <strong>Healthcare:</strong> HIPAA, HITRUST, GxP</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="mb-2">How to Use Compliance Resources</h3>
        <ul className="space-y-2">
          <li>• <strong>Shared Responsibility:</strong> Know which rules Microsoft handles vs. which you handle</li>
          <li>• <strong>Compliance Manager:</strong> Track your compliance across all the rules</li>
          <li>• <strong>Azure Blueprints:</strong> Use ready-made compliant setups</li>
          <li>• <strong>Audit Reports:</strong> Download reports for your own audits</li>
          <li>• <strong>Customer Resources:</strong> Templates, assessment tools, and guides</li>
          <li>• <strong>Documentation:</strong> Official docs for compliance setups</li>
        </ul>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Microsoft Purview:</strong> One tool to organize, protect, and follow rules on all your data — with a data map, catalog, lineage, and compliance checks.
        </li>
        <li>
          <strong>Azure Policy:</strong> A rule enforcer that checks resources against your standards using definitions, assignments, and bundles of rules.
        </li>
        <li>
          <strong>Policy Effects:</strong> What happens when a rule is broken — Audit, Deny, Append, Modify, DeployIfNotExists, and AuditIfNotExists.
        </li>
        <li>
          <strong>Resource Locks:</strong> Stop resources being deleted/changed by accident using ReadOnly (no changes) or CanNotDelete (no deleting) at any level.
        </li>
        <li>
          <strong>Service Trust Portal:</strong> Microsoft's hub for security, privacy, and rule-following proof — audit reports, compliance docs, and risk tools.
        </li>
        <li>
          <strong>Compliance Offerings:</strong> Azure meets many global, regional, and industry rules, with docs to help you stay compliant.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know Purview's organizing vs. protecting/rule-following sides</li>
          <li>• Know the policy effects and when to use each</li>
          <li>• Understand how bundles of policies (initiatives) group rules</li>
          <li>• Know the difference between ReadOnly and CanNotDelete locks</li>
          <li>• Understand how locks pass down the resource tree</li>
          <li>• Be familiar with the main compliance certifications Azure meets</li>
          <li>• Know what's in the Service Trust Portal</li>
        </ul>
      </div>
    </div>
  );
};

export default GovernanceTopic;
