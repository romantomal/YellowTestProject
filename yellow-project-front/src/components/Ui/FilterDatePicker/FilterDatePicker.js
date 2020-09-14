import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterDatePicker.scss";

const FilterDatePicker = props => {
    const [date, setDate] = useState(props.date);

    const changeDate = date => {
        setDate(date);
        props.change(date)
    };

    return (
        <div className="date-picker">
            <span className="date-picker__text">{props.label}</span>
            <DatePicker className="date-picker__field" id={props.id} selected={date} onChange={date => changeDate(date)} inputProps={{ component: props => <input {...props} readOnly />}}/>
        </div>
    )
};

export default FilterDatePicker
