import React,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import Input from './Input';
import Select from './Select';
import "bootstrap/dist/css/bootstrap.min.css";

function TipCalculator() {
    const [billAmount,setBillAmount]=useState('');
    const [people, setPeople] = useState('');
    const [service, setService] = useState('');
    const [totalTip, setTotalTip] = useState(0);

    const handleCalculate=()=>{
        if(!billAmount || !service || !people){
            alert('Please enter values!')
        }
        const tip= Math.ceil((billAmount * service) / people)
        setTotalTip(tip);
        setPeople('');
        setBillAmount('');
        setService('')
    }
  return (
    <>
        <Card text='light' bg='secondary' style={{ width: '19rem' }} className='m-auto mt-5 pt-4 pb-4' >
            <h3>Tip Calculator</h3>
            <Card.Body>
                <h6>How much was your bill?</h6>
                 <div className='flex'>
                    <p>$</p><Input handleInput={(e)=>setBillAmount(e)} value={billAmount} placeholder='Bill Amount' className='ms-5'/>
                </div>
                <Select handleSelect={(e)=>setService(e)} value={service} />
                <h6>How many people are sharing the bill?</h6>
                <div className='flex'>
                    <Input handleInput={(e)=>setPeople(e)} value={people} placeholder='Number of People' className='ms-5'/><p> people</p>
                </div>
                <Button onClick={handleCalculate} variant='primary' className='m-3'>Calculate</Button>
                <div className={totalTip>0 ? 'display' : 'hide'}>
                    <p>TIP AMOUNT</p>
                    <h5><strong>${totalTip}</strong></h5>
                    <p>each</p>
                </div>
            </Card.Body>
        </Card>
      </>
  )
}

export default TipCalculator