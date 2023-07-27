import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NumbersIcon from '@mui/icons-material/Numbers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import RefreshIcon from '@mui/icons-material/Refresh';
import LaunchIcon from '@mui/icons-material/Launch';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { MdCopyright } from "react-icons/md";


// Main application

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
          <img style={{cursor:"pointer"}} src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" alt="logo" onClick={() => navigate('/')} className="logo" />
          <h3 style={{cursor:"pointer"}} className='nevi-text' onClick={()=>navigate('/')}>Everything AWS</h3>
          <IconButton color="inherit" sx={{ marginLeft: "auto" }} onClick={()=>navigate('/')} ><RefreshIcon/></IconButton>
          <Link to="https://www.polymersearch.com/?utm_source=aws"><Button sx={{ marginLeft: "auto" , background:"black", color:"white"}} color="inherit"><ScatterPlotIcon/>Try polymer</Button></Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<SearchBox />} />

        {/* search keyword */}
        <Route path="/all-search-keyword" element={<SearchKeyword />} />
        
        {/* licence name */}
        <Route path="/all-license-name" element={<LicenseName />} />

        {/* language */}
        <Route path="/all-language" element={<Language />} />

        {/* Owner */}
        <Route path="/all-owner" element={<Owner />} />

        {/* Ownertype */}
        <Route path="/all-owner-type" element={<OwnerType />} />

        {/* RepositoryType */}
        <Route path="/all-repository-type" element={<RepositoryType />} />

        {/* ServiceName */}
        <Route path="/all-service-name" element={<ServiceName />} />

        {/* Topics */}
        <Route path="/all-topics" element={<Topics />} />

        {/* AWSverified */}
        <Route path="/all-AWS-verified" element={<AWSverified />} />

        {/* OwnerId */}
        <Route path="/all-owner-id" element={<OwnerId />} />

        {/* MetadataURL */}
        <Route path="/all-metadata-url" element={<MetadataURL />} />

        {/* RepoLink */}
        <Route path="/all-repo-link" element={<RepoLink />} />

        {/* ContributorsUrl */}
        <Route path="/all-contributors-url" element={<ContributorsUrl />} />

        {/* GitUrl */}
        <Route path="/all-git-url" element={<GitUrl />} />

        {/* LanguagesUrl */}
        <Route path="/all-languages-url" element={<LanguagesUrl />} />

        {/* OwnerUrl */}
        <Route path="/all-owner-url" element={<OwnerUrl />} />

        {/* Commites */}
        <Route path="/all-commites" element={<Commites />} />

        {/* Contributors */}
        <Route path="/all-contributors" element={<Contributors />} />

        {/* Forks */}
        <Route path="/all-forks" element={<Forks />} />

        {/* Openissues */}
        <Route path="/all-open-issues" element={<Openissues />} />

        {/* Stars */}
        <Route path="/all-stars" element={<Stars />} />

        {/* Watchers */}
        <Route path="/all-watchers" element={<Watchers />} />

        {/* Id */}
        <Route path="/all-id" element={<Id />} />

        {/* CreatedAt */}
        <Route path="/all-created-at" element={<CreatedAt />} />

        {/* DataRefershTime */}
        <Route path="/all-data-refersh-time" element={<DataRefershTime />} />

        {/* LastUpdate */}
        <Route path="/all-last-update" element={<LastUpdate />} />

        {/* HasWiki */}
        <Route path="/all-has-wiki" element={<HasWiki />} />

        {/* IsFork */}
        <Route path="/all-is-fork" element={<IsFork />} />


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h3>Page Not Found, check your correct url </h3>
    </div>
  );
}


// main search box

function SearchBox() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"} ><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second-container'>
        {/* title part */}
        <div className='search-Box-heading'>
          <h2 className='search-Box-head-title'>aws_browser.csv</h2>
          <hr />
        </div>
        <div className='search-Box-details-information'>
          {details.map((ele) => (<SearchBoxCard data={ele} key={ele} />))}
        </div>
      </div>
    </div>
  );
}

// search keyword

function SearchKeyword() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head'>Search keyword</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<SearchKeywordDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// *********************************************************************************************************************


// licence name
function LicenseName() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>License Name</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<LicenseDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// language
function Language() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Languages</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<LanguageDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Owner
function Owner() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Owner</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<OwnerDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// OwnerType
function OwnerType() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Owner Type</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<OwnerTypeDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// RepositoryType
function RepositoryType() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Repository Type</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<RepositoryTypeDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ServiceName
function ServiceName() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Service Name</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<ServiceNameDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Topics
function Topics() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Topics</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<TopicsDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// AWSverfied
function AWSverified() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>AWS Verified</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<AWSVerifiedDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// OwnerId
function OwnerId() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Owner Id</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<OwnerIdDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// MetadataURL
function MetadataURL() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Metadata URL</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<MetadataURLDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// RepoLink
function RepoLink() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Repo Link</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<RepoLinkDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ContributorsUrl
function ContributorsUrl() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Contributors URL</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<ContributorsUrlDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// GitUrl
function GitUrl() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Git URL</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<GitUrlDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// LanguagesUrl
function LanguagesUrl() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Languages URL</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<LanguagesUrlDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// OwnerUrl
function OwnerUrl() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Owner URL</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<OwnerUrlDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Commites
function Commites() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Commites</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<CommitesDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Contributors
function Contributors() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Contributors</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<ContributorsDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Forks
function Forks() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Forks</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<ForksDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Openissues
function Openissues() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Open Issues</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<OpenissuesDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Stars
function Stars() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Stars</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<StarsDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Watchers
function Watchers() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Watchers</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<WatchersDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// Id
function Id() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Id</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<IdDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// CreatedAt
function CreatedAt() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Created At</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<CreateAtDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// DataRefershTime
function DataRefershTime() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Data Refersh Time</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<DataRefershTimeDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// LastUpdate
function LastUpdate() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
               <h2 className='search-Box-head-title'>Last Update</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<LastUpdateDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

// HasWiki
function HasWiki() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Has Wiki</h2>
            <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<HasWikiDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// IsFork

function IsFork() {
  const navigate = useNavigate();
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
    <div className='searchBox-main-container'>
      {/* search box first container */}
      <div className='search-Box-first-container'>
        <TextField size='small' className='searchfiled' variant="outlined" placeholder='search' defaultValue={value}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                console.log('clicked');
                let value = document.querySelector('input').value;
                let path_value = value.toLowerCase();
                let path;
                switch (path_value) {
                  case 'search keyword':
                    path = "/all-search-keyword";
                    break;
                  case 'licence name':
                    path = "/all-license-name";
                    break;
                  case 'language':
                    path = "/all-language";
                    break;
                  case 'owner':
                    path = "/all-owner";
                    break;
                  case 'owner type':
                    path = "/all-owner-type";
                    break;
                  case 'repository type':
                    path = "/all-repository-type";
                    break;
                  case 'service name':
                    path = "/all-service-name";
                    break;
                  case 'topics':
                    path = "/all-topics";
                    break;
                  case 'aws verified':
                    path = "/all-AWS-verified";
                    break;
                  case 'owner id':
                    path = "/all-owner-id";
                    break;
                  case 'metadata url':
                    path = "/all-metadata-url";
                    break;
                  case 'repo link':
                    path = "/all-repo-link";
                    break;
                  case 'contributors url':
                    path = "/all-contributors-url";
                    break;
                  case 'git url':
                    path = "/all-git-url";
                    break;
                  case 'languages url':
                    path = "/all-languages-url";
                    break;
                  case 'owner url':
                    path = "/all-owner-url";
                    break;
                  case 'commites':
                    path = "/all-commites";
                    break;
                  case 'contributors':
                    path = "/all-contributors";
                    break;
                  case 'forks':
                    path = "/all-forks";
                    break;
                  case 'open issues':
                    path = "/all-open-issues";
                    break;
                  case 'stars':
                    path = "/all-stars";
                    break;
                  case 'watchers':
                    path = "/all-watchers";
                    break;
                  case 'id':
                    path = "/all-id";
                    break;
                  case 'created at':
                    path = "/all-created-at";
                    break;
                  case 'data refersh time':
                    path = "/all-data-refersh-time";
                    break;
                  case 'last update':
                    path = "/all-last-update";
                    break;
                  case 'has wiki':
                    path = "/all-has-wiki";
                    break;
                  case 'is fork':
                    path = "/all-is-fork";
                    break;
                }
                navigate(path);
              }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        {/* all catagories */}
        <div className="allcatagories">
          {/* catagories */}
          <div className="caragories-optons">
            <h4 className='title-icon'><MdCopyright/>Catagories</h4>
            <Link className='title-name-type1' to={"/all-search-keyword"}><span>Search keyword</span> </Link>
            <Link className='title-name-type2' to={"/all-license-name"}><span>License Name</span></Link>
            <Link className='title-name-type3' to={"/all-language"}><span>Language</span></Link>
            <Link className='title-name-type4' to={"/all-owner"}><span>Owner</span></Link>
            <Link className='title-name-type5' to={"/all-owner-type"}><span>owner type</span></Link>
            <Link className='title-name-type1' to={"/all-repository-type"}><span>Repository Type</span></Link>
            <Link className='title-name-type2' to={"/all-service-name"}><span>Service Name</span></Link>
            <Link className='title-name-type3' to={"/all-topics"}><span>Topics</span></Link>
            <Link className='title-name-type4' to={"/all-AWS-verified"}><span>AWS verified</span></Link>
            <Link className='title-name-type5' to={"/all-owner-id"}><span>Owner Id</span></Link>
          </div>
          
          {/* urls */}
          <div className='urls-options'>
            <h4 className='title-icon'><InsertLinkIcon /> URLs</h4>
            <Link className='title-name-type1' to={"/all-metadata-url"}><span>Metadata URL</span></Link>
            <Link className='title-name-type2' to={"/all-repo-link"}><span>Repo Link</span></Link>
            <Link className='title-name-type3' to={"/all-contributors-url"}><span>Contributors Url</span></Link>
            <Link className='title-name-type4' to={"/all-git-url"}><span>Git Url</span></Link>
            <Link className='title-name-type5' to={"/all-languages-url"}><span>Laguages url</span></Link>
            <Link className='title-name-type1' to={"/all-owner-url"}><span>Owner urls</span></Link>
          </div>
          
          {/* Numerical */}
          <div className='Numerical-options'>
            <h4 className='title-icon'><NumbersIcon /> Numerical</h4>
            <Link className='title-name-type1' to={"/all-commites"}><span>commites</span></Link>
            <Link className='title-name-type2' to={"/all-contributors"}><span>Contributors</span></Link>
            <Link className='title-name-type3' to={"/all-forks"}><span>Forks</span></Link>
            <Link className='title-name-type4' to={"/all-open-issues"}><span>open Issues</span></Link>
            <Link className='title-name-type5' to={"/all-stars"}><span>stars</span></Link>
            <Link className='title-name-type1' to={"/all-watchers"}><span>Watchers</span></Link>
            <Link className='title-name-type2' to={"/all-id"}><span>Id</span></Link>
          </div>
          
          {/* Dates */}
          <div className='dates-options'>
            <h4 className='title-icon'><CalendarMonthIcon /> Dates</h4>
            <Link className='title-name-type1' to={"/all-created-at"}><span>Created At</span></Link>
            <Link className='title-name-type2' to={"/all-data-refersh-time"}><span>Data Refersh Time</span></Link>
            <Link className='title-name-type3' to={"/all-last-update"}><span>Last update</span></Link>
          </div>
          
          {/* Booleans */}
          <div className='booleans-options'>
            <h4 className='title-icon'><FilterNoneIcon /> Booleans</h4>
            <Link className='title-name-type1' to={"/all-has-wiki"}><span>Has Wiki</span></Link>
            <Link className='title-name-type2' to={"/all-is-fork"}><span>Is Fork</span></Link>
          </div>
        </div>
      </div>

      {/* serach box second container */}
      <div className='search-Box-second'>
        <div className="search-box-second-details">
          {/* title part */}
          <div className='search-Box-heading'>
            <div className='search-Box-heading-title'>
              <h2 className='search-Box-head-title'>Is Fork</h2>
              <span style={{marginLeft:"auto", cursor:"pointer"}} onClick={()=> navigate('/')} className='search-Box-head-title'>✖</span>
            </div>
            <hr />
          </div>
          <div className='search-Box-details'>
            {details.map((ele) => (<IsForkDetails data={ele} key={ele} />))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ---------------------------------------------------------------------------------------------------------------------
function SearchBoxCard({ data }) {
  return (
    <Card className='search-Box-card'>    
      <CardContent className='search-Box-card-content'>
        <h3 className='card-content'>{data.title_head}</h3>
        <p className='card-content'>{data.description}</p>
        <div className="linkbutton">
          <Link to={'https://github.com/aws/aws-cli.git'}><Button size="small" variant='outlined' ><LaunchIcon />Github Repo</Button></Link>
          <CopyToClipboard text={data.share_id}><Button size="small" variant='outlined'><InsertLinkIcon />Share</Button></CopyToClipboard>
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


function SearchKeywordDetails({data}) {
  return (
    <div className="details">
      <span>{ data.search_keywords}</span>
    </div>
  );
}

function LicenseDetails({ data }) {
  return (
    <div className="details">
      <span>{ data.license_name}</span>
    </div>
  );
}


function LanguageDetails({data}) {
  return (
    <div className="details">
      <span>{ data.language}</span>
    </div>
  );
}

// -----------------------------------------------------------------------------------------------------

// OwnerDetails
function OwnerDetails({data}) {
  return (
    <div className="details">
      <span>{ data.owner}</span>
    </div>
  );
}


// OwnerTypeDetails
function OwnerTypeDetails({data}) {
  return (
    <div className="details">
      <span>{ data.owner_type}</span>
    </div>
  );
}


// RepositoryTypeDetails
function RepositoryTypeDetails({data}) {
  return (
    <div className="details">
      <span>{ data.repository_type}</span>
    </div>
  );
}


// ServiceNameDetails
function ServiceNameDetails({data}) {
  return (
    <div className="details">
      <span>{ data.service_name}</span>
    </div>
  );
}


// // TopicsDetails
function TopicsDetails({data}) {
  return (
    <div className="details">
      <span>{ data.topics.topie_1}</span>
      <span>{ data.topics.topie_2}</span>
      <span>{ data.topics.topie_3}</span>
      <span>{ data.topics.topie_4}</span>
    </div>
  );
}


// AWSVerfiedDetails
function AWSVerifiedDetails({data}) {
  return (
    <div className="details">
      <span>{ data.aws_verified}</span>
    </div>
  );
}


// OwnerIdDetails
function OwnerIdDetails({data}) {
  return (
    <div className="details">
      <span>{ data.owner_id}</span>
    </div>
  );
}


// MetadataURLDetails
function MetadataURLDetails({data}) {
  return (
    <div className="details">
      <span>{ data.language}</span>
    </div>
  );
}


// RepoLinkDetails
function RepoLinkDetails({data}) {
  return (
    <div className="details">
      <span>{ data.repo_link}</span>
    </div>
  );
}


// ContributorsUrlDetails
function ContributorsUrlDetails({data}) {
  return (
    <div className="details">
      <span>{ data.contributors_url}</span>
    </div>
  );
}


// GitUrlDetails
function GitUrlDetails({data}) {
  return (
    <div className="details">
      <span>{ data.git_url}</span>
    </div>
  );
}


// LanguagesUrlDetails
function LanguagesUrlDetails({data}) {
  return (
    <div className="details">
      <span>{ data.language_url}</span>
    </div>
  );
}


// OwnerUrlDetails
function OwnerUrlDetails({data}) {
  return (
    <div className="details">
      <span>{ data.owner_avatar_url}</span>
    </div>
  );
}


// CommitesDetails
function CommitesDetails({data}) {
  return (
    <div className="details">
      <span>{ data.commit}</span>
    </div>
  );
}


// ContributorsDetails
function ContributorsDetails({data}) {
  return (
    <div className="details">
      <span>{ data.contributors}</span>
    </div>
  );
}


// ForksDetails
function ForksDetails({data}) {
  return (
    <div className="details">
      <span>{ data.forks}</span>
    </div>
  );
}


// OpenissuesDetails
function OpenissuesDetails({data}) {
  return (
    <div className="details">
      <span>{ data.open_issues}</span>
    </div>
  );
}


// StarsDetails
function StarsDetails({data}) {
  return (
    <div className="details">
      <span>{ data.Stars}</span>
    </div>
  );
}


// WatchersDetails
function WatchersDetails({data}) {
  return (
    <div className="details">
      <span>{ data.watchers}</span>
    </div>
  );
}



// IdDetails
function IdDetails({data}) {
  return (
    <div className="details">
      <span>{ data.id}</span>
    </div>
  );
}


// CreateAtDetails
function CreateAtDetails({data}) {
  return (
    <div className="details">
      <span>{ data.created_at}</span>
    </div>
  );
}


// DataRefershTimeDetails
function DataRefershTimeDetails({data}) {
  return (
    <div className="details">
      <span>{ data.data_refresh_time}</span>
    </div>
  );
}


// LastUpdateDetails
function LastUpdateDetails({data}) {
  return (
    <div className="details">
      <span>{ data.last_updated}</span>
    </div>
  );
}


// HasWikiDetails
function HasWikiDetails({data}) {
  return (
    <div className="details">
      <span>{ data.has_wiki}</span>
    </div>
  );
}


// IsForkDetails
function IsForkDetails({data}) {
  return (
    <div className="details">
      <span>{ data.is_fork }</span>
    </div>
  );
}

