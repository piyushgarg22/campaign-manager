const Tabs = () => {

    const [tabs,
      setTabs] = useState([
      {
        tabBar: "Upcoming Campaigns",
        active: false
      }, {
        tabBar: "Live Campaigns",
        active: false
      }, {
        tabBar: "Past Campaigns",
        active: false
      }
    ])
  
  
    useEffect(()=>{
      setTabs(tabs)
    })
  
    
  
    const toggleTab = (index) => {
      let newTabs = [...tabs];
      newTabs[index].active = !newTabs[index].active
      setTabs(newTabs)
    }
  
    return <div className="wrapper">
      <div className="tab-pills">
        {tabs.map((tab, index) => <div
          className={(tab.active || index == 0)
          ? "tab-Pill active"
          : "tab-Pill"}
          onClick={() => toggleTab(index)}>{tab.tabBar}</div>)}
      </div>
  
    </div>
  }

  
  export default Tabs;