const CampaignList = () => {

  const [campaigns,
    setCampaigns] = useState(Data)

  // const [tabConent,setTabContent] = userState({activeTab: this.props})

  console.log(campaigns)

  return (
    <React.Fragment>
      {Header()}
      {Tabs()}
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
              return (
                <div className="Rtable-row" id={index}>
                  <div className="Rtable-cell date-cell">
                    <div className="Rtable-cell--heading">Date</div>
                    <div className="Rtable-cell--content date-content">
                      <span className="webinar-date">{getFormattedDate(new Date(campaign.createdOn))}</span><br/>
                      <span className="font-12 color-grey">{time_ago(campaign.createdOn)}</span>
                    </div>
                  </div>
                  <div className="Rtable-cell topic-cell">
                    <div className="Rtable-cell--image"><img src={Calendar}/></div>
                    <div className="Rtable-cell--content title-content">
                      <span className="title">{campaign.name}</span>
                      <span className="font-12 color-grey">{campaign.region}</span>
                    </div>

                  </div>
                  <div className="Rtable-cell access-link-cell">
                    <div className="Rtable-cell--heading">View</div>
                    <div className="Rtable-cell--content access-link-content">
                      <a href="#0">
                        <img src={PriceingImg}/>
                        <span>View Pricing</span>
                      </a>
                    </div>
                  </div>
                  <div className="Rtable-cell replay-link-cell">
                    <div className="Rtable-cell--heading">Actions</div>
                    <div className="Rtable-cell--content replay-link-content">
                      <a href="#0">
                        <img src={Report}/>
                        <span>Csv</span>
                      </a>
                      <a href="#0">
                        <img src={Csv}/>
                        <span>Report</span>
                      </a>
                      <a href="#0">
                        <img src={Calendar}/>
                        <span>Schedule Again</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>
      </div>
    </React.Fragment>
  )
}

export default CampaignList;