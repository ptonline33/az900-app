export interface SearchResult {
  title: string;
  description: string;
  path: string;
  section: string;
}

// Define all searchable content
export const searchableContent: SearchResult[] = [
  // Cloud Concepts
  {
    title: 'Define Cloud Computing',
    description: 'The basics of cloud computing, who is responsible for what, and what makes it special',
    path: '/topic/cloud-concepts/define-cloud-computing',
    section: 'Cloud Concepts'
  },
  {
    title: 'Cloud Models',
    description: 'Public, private, and hybrid cloud — and which one fits which situation',
    path: '/topic/cloud-concepts/cloud-models',
    section: 'Cloud Concepts'
  },
  {
    title: 'Consumption-Based Model',
    description: 'How cloud pricing works (pay for what you use) and serverless computing',
    path: '/topic/cloud-concepts/consumption-based-model',
    section: 'Cloud Concepts'
  },
  {
    title: 'Benefits of Cloud Services',
    description: 'The big perks: high availability, scaling, reliability, and strong security',
    path: '/topic/cloud-concepts/cloud-benefits',
    section: 'Cloud Concepts'
  },
  {
    title: 'Cloud Service Types',
    description: 'IaaS, PaaS, and SaaS — and when to pick which one',
    path: '/topic/cloud-concepts/cloud-service-types',
    section: 'Cloud Concepts'
  },
  // Azure Architecture
  {
    title: 'Core Architectural Components',
    description: 'Azure regions, availability zones, resource groups, and how things are organized',
    path: '/topic/azure-architecture/core-components',
    section: 'Azure Architecture'
  },
  {
    title: 'Compute and Networking',
    description: 'Virtual machines, containers, networking, and hosting options',
    path: '/topic/azure-architecture/compute-networking',
    section: 'Azure Architecture'
  },
  {
    title: 'Storage Services',
    description: 'The kinds of Azure storage, redundancy options, and tools to move files',
    path: '/topic/azure-architecture/storage-services',
    section: 'Azure Architecture'
  },
  {
    title: 'Identity and Access',
    description: 'Microsoft Entra ID, login methods, and keeping things secure',
    path: '/topic/azure-architecture/identity-access',
    section: 'Azure Architecture'
  },
  // Azure Management
  {
    title: 'Cost Management',
    description: 'Why your Azure bill is what it is, pricing calculators, and ways to save',
    path: '/topic/azure-management/cost-management',
    section: 'Azure Management'
  },
  {
    title: 'Governance and Compliance',
    description: 'Microsoft Purview, Azure Policy, and safety locks for resources',
    path: '/topic/azure-management/governance',
    section: 'Azure Management'
  },
  {
    title: 'Resource Management',
    description: 'Azure portal, Cloud Shell, Azure Arc, and writing infrastructure as code',
    path: '/topic/azure-management/resource-management',
    section: 'Azure Management'
  },
  {
    title: 'Monitoring Tools',
    description: 'Azure Advisor, Service Health, Azure Monitor, and Application Insights',
    path: '/topic/azure-management/monitoring',
    section: 'Azure Management'
  }
];

export const searchContent = (query: string): SearchResult[] => {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];

  return searchableContent.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const descriptionMatch = item.description.toLowerCase().includes(searchTerm);
    const sectionMatch = item.section.toLowerCase().includes(searchTerm);
    
    return titleMatch || descriptionMatch || sectionMatch;
  });
};