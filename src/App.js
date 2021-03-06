import React from 'react';




const ZooArea = [
  {
    id : 1,
    name : "monkey",
    image : "https://image.newsis.com/2020/01/09/NISI20200109_0000460061_web.jpg?rnd=20200109143700"
  },
  {
    id : 2,
    name : "lion",
    image : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F2408DD3658A648B12CF09D"
  },
  {
    id : 3,
    name : "bear",
    image : "https://images.newscientist.com/wp-content/uploads/2017/04/26173712/gettyimages-613093404.jpg"
  },
  {
    id : 4,
    name : "horse",
    image : "https://mblogthumb-phinf.pstatic.net/20151223_102/moeblog_1450838647639hIznC_JPEG/%B8%BB.jpg?type=w2"
  },
  {
    id : 5,
    name : "pig",
    image : "https://www.canr.msu.edu/contentAsset/image/9c8f1a21-90e3-486d-9ca0-dd4a7b4b439d/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80"
  },
]

// function RenderZoo(zooBox){
//   return( <Zoo name={zooBox.name} happy={zooBox.image} /> );
// };
function Zoo({ name, happy }){
  return(
    <div>
     <h2> 부활한 원숭이 {name}</h2>
     <img src={happy} alt={name} />
    </div>
  )
};

function App() {
  return (
    <div>
     {
    //  ZooArea.map(RenderZoo)
     ZooArea.map(zooBox => <Zoo key={zooBox.id} name={zooBox.name} happy={zooBox.image}  />)
     }
    </div>
  );
}

export default App;
