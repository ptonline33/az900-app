import React from 'react';

const CloudModelsTopic: React.FC = () => {
  return (
    <div>
      <h1>Cloud Models (Where Your Cloud Lives)</h1>
      
      <p>
        A cloud model just tells you <strong>where your servers are and who runs them.</strong>
        There are three main options: public, private, and hybrid. They mainly differ in how much 
        control and privacy you get versus how much maintenance and cost you take on.
      </p>

      <h2>The Three Types of Cloud Models</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Public Cloud</h3>
          <p className="mb-3">
            The "rent an apartment" option. Microsoft owns everything and anyone can 
            pay to use a slice of it over the internet.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• No big upfront payment to buy machines</li>
            <li>• Grows almost instantly when you need more</li>
            <li>• Pay-as-you-go, like a utility bill</li>
            <li>• You don't need to be a tech expert to start</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Private Cloud</h3>
          <p className="mb-3">
            The "buy your own house" option. It's all yours alone — either in your own building 
            or run just for your company by a provider.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• You pay to buy the hardware</li>
            <li>• You have total control</li>
            <li>• More private and secure, since it's only yours</li>
            <li>• You're on the hook for fixing and updating it</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="text-center text-xl mb-3">Hybrid Cloud</h3>
          <p className="mb-3">
            The "house plus a rental apartment" option. You use both your own setup (private) 
            and a rented one (public), and they work together.
          </p>
          <h4 className="font-medium mt-4 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            <li>• Most flexible — mix and match as needed</li>
            <li>• You decide which things run where</li>
            <li>• You can keep sensitive stuff private, other stuff public</li>
            <li>• More complicated to run, since there are two worlds</li>
          </ul>
        </div>
      </div>

      <h2>When Is Each Model the Best Fit?</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Cloud Model</th>
              <th>Good If You...</th>
              <th>Real-World Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public Cloud</td>
              <td>
                • Have ups and downs in demand<br />
                • Are a startup or small company<br />
                • Don't know how busy you'll be<br />
                • Want a quick, cheap way to build and test
              </td>
              <td>
                • Email<br />
                • Test/demo environments<br />
                • Websites<br />
                • Backup and file storage
              </td>
            </tr>
            <tr>
              <td>Private Cloud</td>
              <td>
                • Must follow strict security rules<br />
                • Need total control over everything<br />
                • Can't risk sharing space with others<br />
                • Run critical, must-not-fail operations
              </td>
              <td>
                • Banks and financial firms<br />
                • Government agencies<br />
                • Hospitals and health care<br />
                • Large companies with older applications
              </td>
            </tr>
            <tr>
              <td>Hybrid Cloud</td>
              <td>
                • Have a mix of needs<br />
                • Get busier at certain times of year<br />
                • Want to move to the cloud gradually
              </td>
              <td>
                • Old apps stay private, new apps go public<br />
                • Extra capacity during busy seasons<br />
                • Sensitive data stays home, the rest goes to the cloud<br />
                • Backup and recovery plans
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Multi-Cloud (Using More Than One Provider)</h2>
      
      <p>
        Multi-cloud means you don't put all your eggs in one basket — you use <strong>two or more cloud 
        companies at the same time</strong> (like Azure plus AWS or Google). People do this to:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Avoid being trapped with one provider</li>
        <li>• Use the best tool each provider is good at</li>
        <li>• Be safer if one provider has an outage</li>
        <li>• Save money by picking the cheapest option for each job</li>
      </ul>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Cloud Models at a Glance</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center font-medium">Public Cloud</div>
          <div className="text-center font-medium">Private Cloud</div>
          <div className="text-center font-medium">Hybrid Cloud</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">Cheapest</div>
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">Most Expensive</div>
          <div className="text-center bg-blue-100 dark:bg-blue-900/30 p-2 rounded">In Between</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">No Upkeep</div>
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">You Maintain Everything</div>
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-2 rounded">Some Upkeep</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Least Control</div>
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Most Control</div>
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-2 rounded">Balanced Control</div>
        </div>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Public Cloud:</strong> Someone else owns it, anyone can rent it, pay-as-you-go, least control.
        </li>
        <li>
          <strong>Private Cloud:</strong> Just for you, max control and privacy, but you pay more and do more work.
        </li>
        <li>
          <strong>Hybrid Cloud:</strong> Combines public and private — flexible, but more complex to manage.
        </li>
        <li>
          <strong>Multi-Cloud:</strong> Using several different cloud providers on purpose, to avoid being stuck with one.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Know the defining traits of each cloud model</li>
          <li>• Understand which situation each model fits best</li>
          <li>• Remember the trade-offs: cost vs. control vs. how much work you do</li>
          <li>• Know that hybrid combines public and private for flexibility</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudModelsTopic;
