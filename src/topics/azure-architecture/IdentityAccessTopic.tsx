import React from 'react';

const IdentityAccessTopic: React.FC = () => {
  return (
    <div>
      <h1>Identity, Access, and Security (Who Are You & What Can You Do?)</h1>
      
      <p>
        Identity is the heart of cloud security. In plain terms, this topic is about:
        <strong> "prove who you are" (identity/auth) and "let you do only what you're allowed" (access).</strong>
        Azure has a whole toolkit for this.
      </p>

      <h2>Directory Services (The Master List of Users)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Entra ID (The Cloud User Directory)</h3>
          <p className="mb-3">
            Think of it as <strong>the cloud's phone book and security guard.</strong> It holds all your 
            users and lets them sign in and access resources.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Checks your identity when you log in (authentication)</li>
            <li>• Single sign-on (SSO) — one login, many apps</li>
            <li>• Manages applications</li>
            <li>• Business-to-business (B2B) — let partners in safely</li>
            <li>• Business-to-customer (B2C) — let customers sign in</li>
            <li>• Device management</li>
            <li>• Conditional Access (smart login rules)</li>
            <li>• Identity Protection</li>
            <li>• Privileged Identity Management (guard the VIP accounts)</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Microsoft Entra Domain Services (Old-School Domains Made Easy)</h3>
          <p className="mb-3">
            Some older apps need an <strong>old-fashioned Windows domain</strong> (like your office's login system). 
            This provides that in the cloud <strong>without you building it yourself.</strong>
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Managed domain services</li>
            <li>• Lets Azure VMs join the domain</li>
            <li>• Supports LDAP (a directory protocol)</li>
            <li>• Kerberos/NTLM authentication (old login methods)</li>
            <li>• Group Policy support</li>
            <li>• Secure LDAP (LDAPS)</li>
            <li>• Works with Microsoft Entra ID</li>
            <li>• No domain controllers to set up</li>
            <li>• Fully managed (no patching for you)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Entra ID vs. Domain Services</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Microsoft Entra ID</th>
                <th>Microsoft Entra Domain Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main job</td>
                <td>Cloud identity and access management</td>
                <td>Managed domain services</td>
              </tr>
              <tr>
                <td>Login protocols</td>
                <td>Modern (SAML, OAuth, OpenID Connect)</td>
                <td>Legacy (Kerberos, NTLM, LDAP)</td>
              </tr>
              <tr>
                <td>Domain join</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Group Policy</td>
                <td>No (uses Conditional Access)</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>LDAP support</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Structure</td>
                <td>Flat</td>
                <td>Traditional AD hierarchy</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Modern cloud/web apps</td>
                <td>Legacy apps needing domain services</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Ways to Prove Who You Are (Authentication)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Single Sign-On (SSO)</h3>
          <p className="mb-3">
            <strong>Log in once, get into everything.</strong> No more 20 different passwords.
          </p>
          <h4 className="font-medium mt-4 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            <li>• Better user experience</li>
            <li>• Fewer passwords to remember</li>
            <li>• Simpler access management</li>
            <li>• One central place to control security</li>
            <li>• Fewer "I forgot my password" calls</li>
            <li>• More productive users</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Multi-Factor Authentication (MFA)</h3>
          <p className="mb-3">
            <strong>"Prove it with more than one thing."</strong> Typically something you know (password) 
            plus something you have (phone) — a second lock on the door.
          </p>
          <h4 className="font-medium mt-4 mb-2">Ways to Verify:</h4>
          <ul className="space-y-1">
            <li>• Microsoft Authenticator app</li>
            <li>• OATH hardware tokens</li>
            <li>• SMS verification codes</li>
            <li>• Voice calls</li>
            <li>• Email codes</li>
            <li>• Security questions</li>
            <li>• App passwords</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Passwordless Authentication</h3>
          <p className="mb-3">
            <strong>No password at all.</strong> Use your face, a key, or your phone instead — 
            safer AND easier.
          </p>
          <h4 className="font-medium mt-4 mb-2">Options:</h4>
          <ul className="space-y-1">
            <li>• Windows Hello for Business</li>
            <li>• FIDO2 security keys</li>
            <li>• Microsoft Authenticator app</li>
            <li>• Temporary Access Pass</li>
            <li>• Certificate-based authentication</li>
            <li>• SMS sign-in</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">The Login Process (Step by Step)</h3>
        <div className="flowchart">
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              You enter credentials
            </div>
            <div className="flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Auth service checks them
            </div>
            <div className="flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              You get an access token
            </div>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2 text-center">
            <div className="col-start-5 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Access the resource
            </div>
            <div className="col-start-4 flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="col-start-3 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Authorization check
            </div>
            <div className="col-start-2 flex items-center justify-center">
              <span>→</span>
            </div>
            <div className="col-start-1 bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
              Token validation
            </div>
          </div>
        </div>
      </div>

      <h2>Outside People (External Identities)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Business-to-Business (B2B)</h3>
          <p className="mb-3">
            Let <strong>partners, vendors, and suppliers</strong> into <em>your</em> stuff — but only 
            what you want them to see.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Secure guest access</li>
            <li>• Self-service sign-up portal</li>
            <li>• Connect with their own company logins</li>
            <li>• Access reviews</li>
            <li>• Apply login rules</li>
            <li>• They use their existing identities</li>
            <li>• Central partner management</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Business-to-Customer (B2C)</h3>
          <p className="mb-3">
            For <strong>customer-facing apps</strong> — let the public sign in to YOUR app with Google, 
            Facebook, email, you name it.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            <li>• Custom branding</li>
            <li>• Social logins (Google, Facebook, etc.)</li>
            <li>• Custom sign-up flows</li>
            <li>• Learn about users gradually</li>
            <li>• User migration</li>
            <li>• Fraud protection</li>
            <li>• Multiple languages</li>
            <li>• Self-service password reset</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">B2B vs. B2C</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>B2B</th>
                <th>B2C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who is it for?</td>
                <td>Partners, suppliers, vendors</td>
                <td>Customers, consumers</td>
              </tr>
              <tr>
                <td>What they access</td>
                <td>Your internal resources/apps</td>
                <td>Your customer-facing apps</td>
              </tr>
              <tr>
                <td>Who manages identities</td>
                <td>Your organization</td>
                <td>Customers manage their own</td>
              </tr>
              <tr>
                <td>Interface</td>
                <td>Standard Microsoft look</td>
                <td>Custom, branded experience</td>
              </tr>
              <tr>
                <td>Relationship</td>
                <td>Business to business</td>
                <td>Business to consumer</td>
              </tr>
              <tr>
                <td>Integration</td>
                <td>Uses your existing tenant</td>
                <td>Uses a separate B2C tenant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Conditional Access (Smart Door Rules)</h2>
      
      <p className="mb-4">
        Conditional Access lets you make <strong>if-then login rules.</strong> For example: 
        "If this is an admin, then require MFA." or "If this comes from an untrusted country, 
        then block it."
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">How Conditional Access Works</h3>
        <div className="relative">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Signals (Facts)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Who the user is</li>
                <li>• Where they are (IP/location)</li>
                <li>• What device they're on</li>
                <li>• Which app they're using</li>
                <li>• Risk level detected</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Decision (Verdict)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Allow</li>
                <li>• Block</li>
                <li>• Allow with extra conditions</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <h4 className="text-center mb-2">Enforcement (Action)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Require MFA</li>
                <li>• Require a compliant device</li>
                <li>• Require an approved app</li>
                <li>• Require accepting terms</li>
                <li>• Limit the session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Common Conditional Access Rules</h3>
        <ul className="space-y-2">
          <li>• <strong>Require MFA for admins:</strong> Admins must use extra verification</li>
          <li>• <strong>Require MFA for Azure management:</strong> Protect the Azure portal</li>
          <li>• <strong>Block untrusted locations:</strong> Stop logins from risky countries</li>
          <li>• <strong>Require managed devices:</strong> Only compliant/joined devices allowed</li>
          <li>• <strong>Block old login methods:</strong> Prevent use of outdated, weaker protocols</li>
          <li>• <strong>App protection policies:</strong> Mobile apps must follow company rules</li>
          <li>• <strong>Risk-based policies:</strong> Trigger MFA if a login seems risky</li>
          <li>• <strong>Session controls:</strong> Limit what users can do in a session</li>
        </ul>
      </div>

      <h2>RBAC (Who Can Do What — Roles)</h2>
      
      <p className="mb-4">
        RBAC is about <strong>permissions.</strong> Instead of giving everyone "all access," you give 
        people roles (like "viewer" or "editor") and they get only what that role allows.
      </p>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">The Three Pieces of a Permission</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Who (Security Principal)</h4>
            <p className="text-sm">
              The "who" asking for access:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• User</li>
              <li>• Group</li>
              <li>• Service Principal</li>
              <li>• Managed Identity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">What (Role Definition)</h4>
            <p className="text-sm">
              The "what actions" are allowed:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• Owner</li>
              <li>• Contributor</li>
              <li>• Reader</li>
              <li>• Custom roles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Where (Scope)</h4>
            <p className="text-sm">
              The "where" it applies:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>• Management group</li>
              <li>• Subscription</li>
              <li>• Resource group</li>
              <li>• Single resource</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="table-container mb-8">
        <table>
          <thead>
            <tr>
              <th>Built-in Role</th>
              <th>What It Does (Plain Words)</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Owner</td>
              <td>Full access, including giving access to others</td>
              <td>Admins who need complete control</td>
            </tr>
            <tr>
              <td>Contributor</td>
              <td>Can create/manage resources, but can't give access to others</td>
              <td>Developers who deploy and manage</td>
            </tr>
            <tr>
              <td>Reader</td>
              <td>Can only look, not change</td>
              <td>Auditors who need to view</td>
            </tr>
            <tr>
              <td>User Access Administrator</td>
              <td>Manages who can access, but not the resources themselves</td>
              <td>Help desk managing access</td>
            </tr>
            <tr>
              <td>Virtual Machine Contributor</td>
              <td>Can create/manage VMs, but can't log into them</td>
              <td>VM team that maintains VMs</td>
            </tr>
            <tr>
              <td>Network Contributor</td>
              <td>Manages network resources</td>
              <td>Network admins</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Zero Trust (Never Trust, Always Check)</h2>
      
      <p className="mb-4">
        Old security assumed: "if you're inside our network, you're safe." Zero Trust assumes the opposite:
        <strong> nothing is automatically trusted — every request is checked.</strong>
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Zero Trust Principles</h3>
          <ul className="space-y-2">
            <li>• <strong>Verify explicitly:</strong> Always check identity and permissions on every request</li>
            <li>• <strong>Use least privilege:</strong> Give people only the minimum access they need, only when they need it</li>
            <li>• <strong>Assume breach:</strong> Act like you're already compromised — limit damage, encrypt, watch for threats</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Old Thinking vs. Zero Trust</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Traditional Security</th>
                  <th>Zero Trust Security</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trust by default</td>
                  <td>Never trust, always verify</td>
                </tr>
                <tr>
                  <td>Based on the network fence</td>
                  <td>Based on identity</td>
                </tr>
                <tr>
                  <td>VPN-centric approach</td>
                  <td>Least-privilege access</td>
                </tr>
                <tr>
                  <td>Big network segments</td>
                  <td>Fine-grained segmentation</td>
                </tr>
                <tr>
                  <td>Trusts internal traffic</td>
                  <td>Verifies all traffic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Zero Trust Across All Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium mb-2">Identities</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Entra ID</li>
              <li>• Multi-factor authentication</li>
              <li>• Conditional Access</li>
              <li>• Identity Protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Devices</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Intune</li>
              <li>• Defender for Endpoint</li>
              <li>• Compliance policies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Applications</h4>
            <ul className="space-y-1 text-sm">
              <li>• Microsoft Cloud App Security</li>
              <li>• App protection policies</li>
              <li>• API management</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-medium mb-2">Data</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure Information Protection</li>
              <li>• Double Key Encryption</li>
              <li>• Microsoft Purview</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Infrastructure</h4>
            <ul className="space-y-1 text-sm">
              <li>• Azure Security Center</li>
              <li>• Azure Policy</li>
              <li>• Azure Firewall</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Networks</h4>
            <ul className="space-y-1 text-sm">
              <li>• Network segmentation</li>
              <li>• Threat protection</li>
              <li>• Azure DDoS Protection</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Defense-in-Depth (Many Locks, Layer by Layer)</h2>
      
      <p className="mb-4">
        Defense-in-depth means <strong>multiple layers of security.</strong> If a criminal gets past 
        one lock, there are more locks behind it. In cloud terms: physical, identity, network, app, data.
      </p>
      
      <div className="flowchart mb-8">
        <h3 className="text-center mb-4">The Security Layers</h3>
        <div className="relative">
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg text-center">
              Data (the most precious — most protected)
            </div>
            <div className="bg-gray-200 dark:bg-gray-500 p-2 rounded-lg text-center">
              Application
            </div>
            <div className="bg-gray-300 dark:bg-gray-400 p-2 rounded-lg text-center">
              Compute
            </div>
            <div className="bg-gray-400 dark:bg-gray-300 p-2 rounded-lg text-center">
              Network
            </div>
            <div className="bg-gray-500 dark:bg-gray-200 p-2 rounded-lg text-center">
              Perimeter
            </div>
            <div className="bg-gray-600 dark:bg-gray-100 p-2 rounded-lg text-center">
              Identity and Access
            </div>
            <div className="bg-gray-700 dark:bg-gray-50 p-2 rounded-lg text-center">
              Physical Security
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Examples of Each Layer in Azure</h3>
        <ul className="space-y-2">
          <li>• <strong>Physical Security:</strong> Azure data center security measures</li>
          <li>• <strong>Identity and Access:</strong> Entra ID, Conditional Access, RBAC</li>
          <li>• <strong>Perimeter:</strong> DDoS Protection, Azure Firewall, Web App Firewall</li>
          <li>• <strong>Network:</strong> Network Security Groups, Private Link</li>
          <li>• <strong>Compute:</strong> Endpoint security, patching, disk encryption</li>
          <li>• <strong>Application:</strong> Secure development, API security, code scanning</li>
          <li>• <strong>Data:</strong> Encryption, Azure Key Vault, SQL data security</li>
        </ul>
      </div>

      <h2>Microsoft Defender for Cloud (Your Security Camera System)</h2>
      
      <p className="mb-4">
        Defender for Cloud is <strong>a security dashboard that watches over all your resources</strong> — 
        in Azure, on-premises, even in other clouds (AWS, Google) — and tells you what to fix.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">What It Does</h3>
          <ul className="space-y-2">
            <li>• <strong>Security posture:</strong> Keeps score of how secure you are</li>
            <li>• <strong>Recommendations:</strong> Tells you what to fix</li>
            <li>• <strong>Secure Score:</strong> A number that shows your security level</li>
            <li>• <strong>Compliance:</strong> Checks you're following rules</li>
            <li>• <strong>Threat protection:</strong> Detects and defends against attacks</li>
            <li>• <strong>Just-in-time VM access:</strong> Open ports only when needed</li>
            <li>• <strong>Adaptive app controls:</strong> Decides which apps can run</li>
            <li>• <strong>File integrity monitoring:</strong> Detects tampering with important files</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="text-xl font-medium mb-3">Protection Plans (What It Can Watch)</h3>
          <div className="table-container">
            <table className="text-sm">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>What it Protects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Defender for Servers</td>
                  <td>Windows and Linux machines</td>
                </tr>
                <tr>
                  <td>Defender for App Service</td>
                  <td>Web applications</td>
                </tr>
                <tr>
                  <td>Defender for Storage</td>
                  <td>Storage accounts</td>
                </tr>
                <tr>
                  <td>Defender for SQL</td>
                  <td>SQL databases and servers</td>
                </tr>
                <tr>
                  <td>Defender for Kubernetes</td>
                  <td>Azure Kubernetes Service</td>
                </tr>
                <tr>
                  <td>Defender for Container Registries</td>
                  <td>Azure Container Registry</td>
                </tr>
                <tr>
                  <td>Defender for Key Vault</td>
                  <td>Azure Key Vault</td>
                </tr>
                <tr>
                  <td>Defender for Resource Manager</td>
                  <td>Subscription management</td>
                </tr>
                <tr>
                  <td>Defender for DNS</td>
                  <td>DNS resolution and queries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow border border-gray-100 dark:border-gray-600 mb-8">
        <h3 className="mb-3">Free vs. Paid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Free Tier</h4>
            <ul className="space-y-1">
              <li>• Continuous security assessment</li>
              <li>• Security recommendations</li>
              <li>• Secure score</li>
              <li>• Basic compliance dashboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Paid Plans (Premium)</h4>
            <ul className="space-y-1">
              <li>• Everything in Free</li>
              <li>• Advanced threat protection</li>
              <li>• Vulnerability scanning</li>
              <li>• Just-in-time VM access</li>
              <li>• Adaptive app controls</li>
              <li>• Regulatory compliance</li>
              <li>• Cloud workload protection</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Directory Services:</strong> Entra ID = cloud identity; Domain Services = legacy domain without the setup work.
        </li>
        <li>
          <strong>Authentication Methods:</strong> SSO (one login), MFA (extra verification), and passwordless make things safer/easier.
        </li>
        <li>
          <strong>External Identities:</strong> B2B lets partners in; B2C lets customers sign into your apps.
        </li>
        <li>
          <strong>Conditional Access:</strong> If-then login rules based on signals → decisions → enforcement.
        </li>
        <li>
          <strong>RBAC:</strong> Who + role + scope = what you can do.
        </li>
        <li>
          <strong>Zero Trust:</strong> Never trust by default; verify everything; assume breach.
        </li>
        <li>
          <strong>Defense-in-Depth:</strong> Layers of security so one failure isn't the end.
        </li>
        <li>
          <strong>Defender for Cloud:</strong> Monitors security across all your environments and tells you what to fix.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the difference between Entra ID and Domain Services</li>
          <li>• Know the login methods and when to use each</li>
          <li>• Understand B2B vs. B2C</li>
          <li>• Know how Conditional Access works and common rules</li>
          <li>• Be familiar with RBAC concepts and built-in roles</li>
          <li>• Understand Zero Trust and how it differs from traditional security</li>
          <li>• Know the Defense-in-Depth layers and examples of each</li>
          <li>• Understand what Defender for Cloud does</li>
        </ul>
      </div>
    </div>
  );
};

export default IdentityAccessTopic;
