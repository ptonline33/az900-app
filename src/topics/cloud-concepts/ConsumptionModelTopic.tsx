import React from 'react';

const ConsumptionModelTopic: React.FC = () => {
  return (
    <div>
      <h1>The Consumption-Based Model (Only Pay for What You Use)</h1>
      
      <p>
        The biggest difference between the old way (running your own computers) and the cloud is <strong>how you pay.</strong>
        Cloud works like your electricity or water bill: you only pay for what you actually use. 
        This is called the <strong>consumption-based model.</strong>
      </p>

      <h2>Buying Stuff (CapEx) vs. Renting Services (OpEx)</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Buying your own gear (CapEx)</th>
              <th>Renting cloud services (OpEx)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You pay a big amount upfront</td>
              <td>No big upfront payment</td>
            </tr>
            <tr>
              <td>Your equipment loses value over time</td>
              <td>Pay as you go</td>
            </tr>
            <tr>
              <td>Needs a huge initial investment</td>
              <td>You can start a project right away, cheaply</td>
            </tr>
            <tr>
              <td>You bought a fixed amount (no more, no less)</td>
              <td>You can flex up and down to fit your needs</td>
            </tr>
            <tr>
              <td>You pay to maintain and fix the hardware</td>
              <td>No maintenance costs for you</td>
            </tr>
            <tr>
              <td>Tax write-off spread over many years</td>
              <td>Tax write-off in the same year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Paying Per Use Works</h2>
      
      <p>
        With the consumption-based model, you:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Only pay for what you use</li>
        <li>• Add more when you need more</li>
        <li>• Stop paying when you turn things off</li>
        <li>• Grow or shrink based on how busy you are</li>
      </ul>
      
      <div className="flowchart">
        <h3 className="text-center mb-4">Why This Model Is Great</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">No Upfront Costs</h4>
            <p className="text-sm">You don't have to buy anything before you start</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">Grows With You</h4>
            <p className="text-sm">Resources expand automatically when you need them</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
            <h4 className="mb-2">Only Pay for Use</h4>
            <p className="text-sm">You're billed only for what you actually consume</p>
          </div>
        </div>
      </div>

      <h2>Different Ways to Pay</h2>
      
      <p>
        Cloud providers offer a few pricing styles. Think of them like phone plans:
      </p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Pricing Style</th>
              <th>How It Works</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pay-as-you-go</td>
              <td>Pay per second/minute of actual use</td>
              <td>
                • Workloads that go up and down<br />
                • Short-term jobs<br />
                • Testing and development
              </td>
            </tr>
            <tr>
              <td>Reserved Instances</td>
              <td>Pre-pay for 1–3 years to get a big discount</td>
              <td>
                • Steady, predictable usage<br />
                • Budget planning<br />
                • Things that run constantly
              </td>
            </tr>
            <tr>
              <td>Spot Pricing</td>
              <td>Bid on spare capacity that Azure isn't using — cheap, but may be taken away</td>
              <td>
                • Big batch jobs<br />
                • Non-critical workloads<br />
                • Work that can pause and resume fine
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Serverless (No Servers to Worry About)</h2>
      
      <p>
        Serverless takes pay-per-use to the extreme. You write your code, and Microsoft runs it whenever 
        it's needed. <strong>You never think about servers at all</strong> — not setting them up, not updating them, not scaling them.
      </p>
      
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
        <h3 className="mb-2">What Makes Something "Serverless":</h3>
        <ul className="space-y-2">
          <li>• <strong>No server management:</strong> You never touch a server — Microsoft does it all</li>
          <li>• <strong>Pay-per-execution:</strong> You're charged for the time your code actually runs</li>
          <li>• <strong>Event-driven:</strong> Your code fires when something happens (a file upload, a message, a timer)</li>
          <li>• <strong>Automatic scaling:</strong> It handles 1 request or 1 million on its own</li>
          <li>• <strong>Stateless:</strong> Each run is independent; nothing is remembered between runs</li>
        </ul>
      </div>
      
      <p>
        Examples of serverless services in Azure:
      </p>
      
      <ul className="mb-4 space-y-2">
        <li>• Azure Functions</li>
        <li>• Azure Logic Apps</li>
        <li>• Azure Event Grid</li>
      </ul>

      <h2>What Influences Your Azure Bill</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">The Type of Resource</h3>
          <p>
            Different things are billed differently:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Compute (running machines):</strong> Billed by CPU time and memory</li>
            <li>• <strong>Storage (saving files):</strong> Billed by how much you store and how often you touch it</li>
            <li>• <strong>Networking (moving data):</strong> Billed by data transferred</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Usage Meters (How It's Measured)</h3>
          <p>
            Azure measures your usage several ways:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Time:</strong> How long a resource is switched on</li>
            <li>• <strong>Data transfer:</strong> How much data moves in/out of Azure</li>
            <li>• <strong>Operations:</strong> How many actions you perform</li>
            <li>• <strong>Executions:</strong> How many times your code or API gets called</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Where It's Located (Region)</h3>
          <p>
            Where you put your stuff changes the price:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Running costs differ by region</li>
            <li>• Moving data between regions costs extra</li>
            <li>• Some services only exist in certain regions</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-600">
          <h3 className="mb-3">Billing Zone (Where Data Flows)</h3>
          <p>
            Data transfer prices depend on zones:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Zone 1:</strong> North America, Europe</li>
            <li>• <strong>Zone 2:</strong> Asia Pacific, South America</li>
            <li>• <strong>Zone 3:</strong> Rest of the world</li>
            <li>• Moving data between zones costs more than within a zone</li>
          </ul>
        </div>
      </div>

      <h2>The Main Ideas to Remember</h2>
      
      <ul className="space-y-2">
        <li>
          <strong>Consumption-Based Model:</strong> You only pay for what you actually use.
        </li>
        <li>
          <strong>CapEx vs. OpEx:</strong> The cloud moves you from paying big upfront (buying) to paying as you go (renting).
        </li>
        <li>
          <strong>Pricing Styles:</strong> Pay-as-you-go, reserved, and spot give you different ways to save or stay flexible.
        </li>
        <li>
          <strong>Serverless:</strong> Extreme version of pay-per-use where you don't manage servers at all.
        </li>
        <li>
          <strong>Cost Factors:</strong> Resource type, how it's measured, where it lives, and data movement all affect your bill.
        </li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
        <h3 className="mb-2">Exam Tips</h3>
        <ul className="space-y-2">
          <li>• Understand the difference between buying (CapEx) and renting (OpEx)</li>
          <li>• Know why pay-per-use is beneficial</li>
          <li>• Recognize the three main pricing styles: pay-as-you-go, reserved, and spot</li>
          <li>• Know what serverless is and why people like it</li>
          <li>• Be aware of the factors that affect Azure costs</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsumptionModelTopic;
