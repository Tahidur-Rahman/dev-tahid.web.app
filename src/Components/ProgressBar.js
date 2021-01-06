import React from "react";

function ProgressBar() {
    return (
      <div className="progress__bar">
        {testData.map((item, idx) => (
          <Progress key={idx} bgcolor={item.bgcolor} completed={item.completed} subject={item.subject}/>
        ))}
      </div>
    );
  }
  

const Progress = (props) => {
    const { bgcolor, completed,subject } = props;
  
    const containerStyles = {
      height: '3rem',
      width: '75rem',
      backgroundColor: "#e0e0de",
      margin: '1rem'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
    transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (<>
        <label>{subject}</label>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </>
    );
  };


const testData = [
  { bgcolor: "#00C9C8", completed: 70,subject:'HTML' },
  { bgcolor: "#ED5E93", completed: 60,subject:'CSS'  },
  { bgcolor: "#ef6c00", completed: 53,subject:'JavaScript'  },
  { bgcolor: "#6a1b9a", completed: 60,subject:'Bootstrap'  },
  { bgcolor: "#00695c", completed: 50,subject:'React'  }
];

  
  export default ProgressBar;