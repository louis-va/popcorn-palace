import { useState } from 'react';

type Tab = {
  title: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  className?: string;
};

const Tabs = ({ tabs, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      <div className={`${className} bg-white/5 border border-white/5 p-1 rounded-full inline-flex gap-1 mb-4`}>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index}
            className={`rounded-full text-sm font-semibold px-4 py-1 hover:cursor-pointer ${activeTab === index ? 'bg-white text-black' : 'text-white-muted hover:bg-white/5'}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='w-full'>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
