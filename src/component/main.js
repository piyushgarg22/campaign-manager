// import React from 'react'; import CampaignList from './campaignList'; import
// Header from './header'; import Tabs from './tabs';
import React, { useState } from 'react';
import Calendar from '../assets/images/calendar.png';
import Csv from '../assets/images/file.png';
import PriceingImg from '../assets/images/Price.png';
import Report from '../assets/images/statistics-report.png';
import data from '../dummy';
import '../style.css';

const time_ago = (time) => {

  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) 
        time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [
      60, 'seconds', 1
    ], // 60
    [
      120, '1 minute ago', '1 minute from now'
    ], // 60*2
    [
      3600, 'minutes', 60
    ], // 60*60, 60
    [
      7200, '1 hour ago', '1 hour from now'
    ], // 60*60*2
    [
      86400, 'hours', 3600
    ], // 60*60*24, 60*60
    [
      172800, 'Yesterday', 'Tomorrow'
    ], // 60*60*24*2
    [
      604800, 'days', 86400
    ], // 60*60*24*7, 60*60*24
    [
      1209600, 'Last week', 'Next week'
    ], // 60*60*24*7*4*2
    [
      2419200, 'weeks', 604800
    ], // 60*60*24*7*4, 60*60*24*7
    [
      4838400, 'Last month', 'Next month'
    ], // 60*60*24*7*4*2
    [
      29030400, 'months', 2419200
    ], // 60*60*24*7*4*12, 60*60*24*7*4
    [
      58060800, 'Last year', 'Next year'
    ], // 60*60*24*7*4*12*2
    [
      2903040000, 'years', 29030400
    ], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [
      5806080000, 'Last century', 'Next century'
    ], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+ new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;

  if (seconds == 0) {
    return 'Just now'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format = time_formats[i++]) 
    if (seconds < format[0]) {
      if (typeof format[2] == 'string') 
        return format[list_choice];
      else 
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
  }

const getFormattedDate = (date) => {

  var monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;

}

const datePicker = () => {
  alert("hi")

  return <input type="date"/>
}

const Header = () => {
  return <div className="headerBar">
    <div className="wrapper">
      <div className="header-logo">
        <img src=""/>
      </div>
    </div>
  </div>
}

// header tabs
const Tabs = ({tabs, activeTab, setActiveTab}) => {

  return <div className="wrapper">
    <div className="tab-pills">
      {tabs.map((tab, index) => <div
        className={(activeTab == index)
        ? "tab-Pill active"
        : "tab-Pill"}
        onClick={() => setActiveTab(index)}
        key={index}>{tab.tabBar}</div>)}
    </div>

  </div>
}

function getCampaignType(campaign) {
  if (new Date() > new Date(campaign.createdOn)) 
    return "past";
  else if (new Date(campaign.createdOn) == new Date()) 
    return "live";
  else 
    return "upcoming";
  }
// campaign
const CampaignList = () => {

  const [campaigns,
    setCampaigns] = useState(data)
  const [tabs,
    setTabs] = useState([
    {
      tabBar: "Upcoming Campaigns",
      name: "upcoming"
    }, {
      tabBar: "Live Campaigns",
      name: "live"
    }, {
      tabBar: "Past Campaigns",
      name: "past"
    }
  ]);
  const [activeTab,
    setActiveTab] = useState(0);

  // const [tabConent,setTabContent] = userState({activeTab: this.props})

  const changeEventDate = (e) => {

    var myDate = e.target.value;
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];

    console.log(new Date(newDate).getTime())

  }
  console.log(campaigns)

  const handleEventDate = (e, id) => {

    debugger;
    let newArray = campaigns.data;
    let data = [...newArray]
    data[id].createdOn = e.target.value;
    // var newss = newEventDate
    setCampaigns(campaigns.data)

  }

  return (
    <React.Fragment>

      <Header/> {/* {Header()} */}
      <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab}/>
      <div className="wrapper">
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-row Rtable-row--head">
            <div className="Rtable-cell date-cell column-heading">Date</div>
            <div className="Rtable-cell topic-cell column-heading">Campaign</div>
            <div className="Rtable-cell access-link-cell column-heading">View</div>
            <div className="Rtable-cell replay-link-cell column-heading">Actions</div>
          </div>

          {campaigns
            .data
            .map((campaign, index) => {
              return ((tabs[activeTab].name == getCampaignType(campaign)) &&< div className = "Rtable-row" key = {
                index
              } > <div className="Rtable-cell date-cell">
                <div className="Rtable-cell--heading">Date</div>
                <div className="Rtable-cell--content date-content">
                  <span className="webinar-date">{getFormattedDate(new Date(campaign.createdOn))}</span>
                  <span className="font-12 color-grey">{time_ago(campaign.createdOn)}</span>
                </div>
              </div> < div className = "Rtable-cell topic-cell" > <div className="Rtable-cell--image"><img src={campaign.image_url}/></div> < div className = "Rtable-cell--content title-content" > <span className="title">{campaign.name}</span> < span className = "font-12 color-grey" > {
                campaign.region
              }  </span>
                    </div > </div> < div className = "Rtable-cell access-link-cell" > <div className="Rtable-cell--heading">View</div> < div className = "Rtable-cell--content access-link-content" > <a target="_blank" href="#0">
                <img src={PriceingImg}/>
                <span>View Pricing</span>
              </a>  </div>
                  </div > <div className="Rtable-cell replay-link-cell">
                <div className="Rtable-cell--heading">Actions</div>
                <div className="Rtable-cell--content replay-link-content">
                  <a target="_blank" href={campaign.report}>
                    <img src={Report}/>
                    <span>Report</span>
                  </a>
                  <a target="_blank" href="#0">
                    <img src={Csv}/>
                    <span>Csv</span>
                  </a>
                  <a target="_blank">
                    <img src={Calendar}/>
                    <span>Schedule Again
                      <input
                        onChange={e => handleEventDate(e, index)}
                        value={new Date(campaign.createdOn).getDate() + "/" + new Date(campaign.createdOn).getMonth() + "/" + new Date(campaign.createdOn).getFullYear()}/>

                    </span>
                  </a>
                </div>
              </div>  </div>
              )
            })}

        </div>
      </div>
    </React.Fragment>
  )
}

export default CampaignList;
