import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function Popup({ details, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2>{details.title}</h2>
        <p>{details.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({ title: '', description: '' });

  const openPopup = (title, description) => {
    setCurrentDetails({ title, description });
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <div className='navbar h-12 flex justify-between'>
        <div className="font-bold  text-400 text-[#26135c] text-4xl">
          Markdown Previewer
        </div>
        <div className=' flex justify-evenly'>
          <button className='mx-4 bg-black rounded-lg px-2 outline-none text-white' onClick={() => openPopup('Heading', <div><div className='text-[24px]'>'# h1'</div>
          <div className='text-[20px]'>'## h2'</div><div className='text-[16px]'>'### h3'</div></div>)}>Heading</button>
          
          <button className='mx-4 bg-black rounded-lg px-2 outline-none text-white' onClick={() => openPopup('Link Syntax', <div className='text-bold text-red-500'>[Name](address)</div>)}>Link</button>
          
          <button className='mx-4 bg-black rounded-lg px-2 outline-none text-white' onClick={() => openPopup('Image Syntax', '![This is an alt text.](https://images.shiksha.com/mediadata/images/1563772691phpODXTnl.jpg "This is a sample image.")')}>Image</button>
          
          <button className='mx-4 bg-black rounded-lg px-2 outline-none text-white' onClick={() => openPopup('List Syntax',<div> <h1> Unordered</h1> <div>Use * </div>  <h1>Ordered</h1> <div>Use 1,2,3.. </div>  </div>)}>List</button>
          
          
          {popupOpen && <Popup details={currentDetails} onClose={closePopup} />}
   
        </div>
      </div>
      <div className="flex justify-center">
        <div className="row mt-4">
          <div className="col-md-6 w-[800px]">
            <h2>Input Markdown</h2>
            <div className="mark-input w-[700px] h-[50vh]">
              <textarea
                className="input w-[700px] h-[50vh] border-[2px] border-solid
                  border-gray-500 outline-none rounded-md bg-[#e8e3e387] ml-auto mr-auto p-2"
                value={markdown}
                onChange={handleMarkdownChange}
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 w-[800px] mt-8">
            <h2>Output</h2>
            <div
              className="mark-output block w-[700px] p-2 min-h-[500px] border-solid border-blue-500 rounded-md border-2px"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
