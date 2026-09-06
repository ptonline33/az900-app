import React from 'react';

const CloudComputingTopic: React.FC = () => {
  return (
    <div>
      <h1>What is Cloud Computing?</h1>
      
      <p>
        Cloud computing just means <strong>renting computing power over the internet</strong> instead of buying 
        and running your own computers. Think of it like using a streaming service for movies instead of buying DVDs.
        You get servers, storage, databases, and software on demand — and you only pay for what you use.
      </p>

      <h2>The Five Key Things That Make Something "Cloud"</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Characteristic</th>
              <th>What It Means in Plain Words</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>On-demand self-service</td>
              <td>You can spin things up yourself whenever you want, without calling a person at Microsoft to turn things on for you.</td>
            </tr>
            <tr>
              <td>Broad network access</td>
              <td>You can get to your stuff from anywhere with an internet connection — your phone, laptop, whatever.</td>
            </tr>
            <tr>
              <td>Resource pooling</td>
              <td>Lots of customers share the same big pool of machines. The provider packs everyone in efficiently.</td>
            </tr>
            <tr>
              <td>Rapid elasticity</td>
              <td>The system can grow or shrink almost instantly. If your website suddenly gets busy, it just adds more power automatically.</td>
            </tr>
            <tr>
              <td>Measured service</td>
              <td>Your usage is metered, like a utility bill. You know exactly how much you used and what it costs.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Who Is Responsible for What? (The Shared Responsibility Model)</h2>
      
      <p>
        Think of it like renting an apartment. The landlord (Microsoft) takes care of the building, the plumbing, 
        and the electricity wiring. You (the tenant) take care of keeping your own apartment clean and locking your door.
        In the cloud, security is split between you and Microsoft — and that split changes depending on the service you use.
      </p>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Shared Responsibility Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">Microsoft Handles</h4>
            <ul className="space-y-2">
              <li>• Guarding the physical buildings (data centers)</li>
              <li>• The network wiring and cables</li>
              <li>• The physical machines themselves</li>
              <li>• Keeping its services up and running</li>
              <li>• The hardware underneath everything</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="text-center mb-2">You Handle</h4>
            <ul className="space-y-2">
              <li>• Your own data and information</li>
              <li>• The devices people use (phones, laptops)</li>
              <li>• Your accounts and who can log in</li>
              <li>• Your applications and their settings</li>
              <li>• Deciding who has access to what</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="mt-4">
        Here's the key idea: <strong>the less work you do, the more Microsoft does for you.</strong>
        That's why the split changes depending on which service you pick:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Service Model</th>
              <th>Microsoft Responsibility</th>
              <th>Your Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SaaS (Software as a Service)</td>
              <td>
                • All the buildings and hardware<br />
                • The app itself<br />
                • Storing the app's data<br />
                • Keeping the network safe
              </td>
              <td>
                • Your own data<br />
                • Your devices<br />
                • Your accounts/identities
              </td>
            </tr>
            <tr>
              <td>PaaS (Platform as a Service)</td>
              <td>
                • All the buildings and hardware<br />
                • The platform and tools you build on<br />
                • Keeping the network safe
              </td>
              <td>
                • Your data<br />
                • Your devices<br />
                • Your accounts/identities<br />
                • The applications you build
              </td>
            </tr>
            <tr>
              <td>IaaS (Infrastructure as a Service)</td>
              <td>
                • All the buildings and hardware<br />
                • Keeping the network safe
              </td>
              <td>
                • Your data<br />
                • Your devices<br />
                • Your accounts/identities<br />
                • Your applications<br />
                • The operating system<br />
                • Even part of the network setup
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Cloud Computing Definition:</strong> Renting servers, storage, platforms, and software 
          over the internet instead of owning them yourself.
        </li>
        <li>
          <strong>Five Essential Characteristics:</strong> Self-service, network access, sharing resources, 
          instant scaling, and metered billing.
        </li>
        <li>
          <strong>Shared Responsibility Model:</strong> Security is split between you and Microsoft. 
          The more Microsoft does, the less you have to worry about.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the five defining characteristics of cloud computing and what each one means</li>
          <li>• Remember that who does what (you vs. Microsoft) changes depending on the service</li>
          <li>• Be able to say what each side is responsible for in the shared responsibility model</li>
          <li>• Know that as you go from IaaS to PaaS to SaaS, Microsoft takes on more responsibility</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudComputingTopic;
