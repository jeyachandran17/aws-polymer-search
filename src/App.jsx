import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DatasetIcon from '@mui/icons-material/Dataset';
import InsightsIcon from '@mui/icons-material/Insights';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { MdCopyright } from "react-icons/md";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NumbersIcon from '@mui/icons-material/Numbers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import RefreshIcon from '@mui/icons-material/Refresh';
import LaunchIcon from '@mui/icons-material/Launch';





function App() {
  return (
    <div className="App">
      <Application />
    </div>
  )
}

export default App


function Application() {
  const navigate = useNavigate();
  return (
    <div className="Application">
      <AppBar position="static">
        <Toolbar>
          <img src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" alt="logo" onClick={() => navigate('/')} className="logo" />
          <h3 className='nevi-text'>Everything AWS</h3>
          <Button sx={{marginLeft:"50px"}} color="inherit"><DatasetIcon/> data</Button>
          <Button color="inherit"><InsightsIcon /> insights</Button>
          <IconButton color="inherit" sx={{ marginLeft: "auto" }} onClick={()=>navigate('/')} ><RefreshIcon/></IconButton>
          <Link to="https://www.polymersearch.com/?utm_source=aws"><Button sx={{ marginLeft: "auto" , background:"black", color:"white"}} color="inherit"><ScatterPlotIcon/>Try polymer</Button></Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}


function SearchBox() {
  const [value, setvalue] = useState("");
  const [details, setdetails] = useState([]);

  useEffect(() => {
    fetch("https://aws-ploymer-search-clone-nodejs.vercel.app/all-details", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response)=>setdetails(response))
  })

  return (
    <div className='searchBox-page'>
      <div className='search-Box-col1'>
        <TextField  variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* catagories */}
        <div className="caragories-optons">
          <h4 className='tiile-icon'><MdCopyright/>Catagories</h4>
          <p className='title-name-type1'><span>Search keyword</span> </p>
          <p className='title-name-type2'><span>License Name</span></p>
          <p className='title-name-type3'><span>Language</span></p>
          <p className='title-name-type4'><span>Owner</span></p>
          <p className='title-name-type5'><span>owner type</span></p>
          <p className='title-name-type1'><span>Repository Type</span></p>
          <p className='title-name-type2'><span>Service Name</span></p>
          <p className='title-name-type3'><span>Topics</span></p>
          <p className='title-name-type4'><span>AWS-verfied</span></p>
          <p className='title-name-type5'><span>Owner Id</span></p>
        </div>
        {/* urls */}
        <div className='urls-options'>
          <h4 className='tiile-icon'><InsertLinkIcon /> URLs</h4>
          <p className='title-name-type1'><span>Metadata-URL</span></p>
          <p className='title-name-type2'><span>Repo Link</span></p>
          <p className='title-name-type3'><span>Contributors Url</span></p>
          <p className='title-name-type4'><span>Git Url</span></p>
          <p className='title-name-type5'><span>Laguages url</span></p>
          <p className='title-name-type1'><span>Owner urls</span></p>
        </div>
        {/* Numerical */}
        <div className='Numerical-options'>
          <h4 className='tiile-icon'><NumbersIcon /> Numerical</h4>
          <p className='title-name-type1'><span>commites</span></p>
          <p className='title-name-type2'><span>Contributors</span></p>
          <p className='title-name-type3'><span>Forks</span></p>
          <p className='title-name-type4'><span>openissues</span></p>
          <p className='title-name-type5'><span>stars</span></p>
          <p className='title-name-type1'><span>Watchers</span></p>
          <p className='title-name-type2'><span>Id</span></p>
        </div>
        {/* Dates */}
        <div className='urls-options'>
          <h4 className='tiile-icon'><CalendarMonthIcon /> Dates</h4>
          <p className='title-name-type1'><span>Created At</span></p>
          <p className='title-name-type2'><span>Data Refersh Time</span></p>
          <p className='title-name-type3'><span>Last update</span></p>
        </div>
        {/* Booleans */}
        <div className='urls-options'>
          <h4 className='tiile-icon'><FilterNoneIcon /> Booleans</h4>
          <p className='title-name-type1'><span>Has Wiki</span></p>
          <p className='title-name-type2'><span>Is Fork</span></p>
        </div>
      </div>
      <div className='search-Box-col2'>
        <div className='search-Box-col2-row1'>
          <h2 className='search-Box-col2-row'>aws_browser.csv</h2>
        </div>
        <div className='search-Box-col2-row2'>
          { details.map((ele)=>(<SearchBoxCard data={ele} key={ele} />)) }
        </div>
      </div>
    </div>
  );
}

function SearchBoxCard({ data }) {
  // const data = {
  //   "title_head": "aws-cli",
  //   "sub_title1": "Popularity",
  //   "Stars": "10,922", // 2,000 - 30k
  //   "forks": "2,602", // 800 - 5,000
  //   "watchers": "10,922", // 2,000 - 30k
  //   "sub_title2": "Stats",
  //   "commit": "9,243", // 1,000 - 30k
  //   "contributors": "259", // 200 - 1,000
  //   "open_issues": "701", // 200 - 3,000
  //   "last_updated": "2021-04-24", // 2021
  //   "created_at": "2012-11-20", // 2012
  //   "sub_title3": "Advanced Details",
  //   "owner_type": "organization",
  //   "has_wiki": "false",
  //   "is_fork": "false",
  //   "language": "python",
  //   "license_name": "view license",
  //   "topics": {
  //     "topie_1": "aws",
  //     "topie_2": "cloud",
  //     "topie_3": "aws-cli",
  //     "topie_4": "cloud-management"
  //   },
  //   "owner_id": "2232217",
  //   "language_url": "https://api.github.com/repos/aws/aws-cli/languages", // https://api.github.com
  //   "full_name": "aws/aws-cl",
  //   "node_id": "MDEwOlJlcG9zaXRvcnk2NzgwNzY3",
  //   "service_name": "simple storage service",
  //   "data_refresh-time": "2021-04-26", // 2021-04-26 00.00.00 +000 UTC
  //   "git_url": "github.com/aws/aws-cli.git",
  //   "repo_link": "https://github.com/aws/aws-cli.git", // https://github.com
  //   "owner": "aws",
  //   "repository_type": "code/library",
  //   "search-keywords": "3",
  //   "description": "Universal Command Line Interface for Amazon Web Services",
  //   "id": "6,780,767", // 10,000 - 50,000,000
  //   "aws_verified": "true",
  //   "owner_avatar_url": "https://avatars.githubusercontent.com/u/2232217", // https://avatars.githubusercontent.com
  //   "contributors_url": "https://api.github.com/repos/aws/aws-cli/contributors", // https://api.github.com
  //   "repository": "aws-cli",
  //   "share_id": "https://app.polymersearch.com/6078616146ee74370403b9c3?presult_id=1"
  // }
  return (
    <Card className='search-Box-card'>    
      <CardContent className='search-Box-card-content'>
        <h3 className='card-content'>{data.title_head}</h3>
        <p className='card-content'>{data.description}</p>
        <div className="linkbutton">
          <Link to={'https://github.com/aws/aws-cli.git'}><Button variant='outlined' ><LaunchIcon />Github Repo</Button></Link>
          <CopyToClipboard text={data.share_id}><Button variant='outlined'><InsertLinkIcon />Share</Button></CopyToClipboard>
        </div>
        <hr />
        <p className='card-content'> Repository : { data.repository } </p>
        <p className='card-content'> Description : { data.description }</p>
        <p className='card-content'> Contributors Url : <a href={ data.contributors_url }>{ data.contributors_url }</a> </p>
        <p className='card-content'> Language Url : <a href={ data.language_url }>{ data.language_url }</a> </p>
        <p className='card-content'> Topise : {data.topics.topie_1}  {data.topics.topie_2}  {data.topics.topie_3}</p>
        <p className='card-content'> Repo Link : <a href={ data.repo_link }> { data.repo_link }</a></p>
        <p className='card-content'> Git Url : <a href={ data.git_url }>{ data.git_url }</a></p>
      </CardContent>
    </Card>
  );
}