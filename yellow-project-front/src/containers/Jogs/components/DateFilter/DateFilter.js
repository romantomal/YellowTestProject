import "./DateFilter.scss";
import React, {useState} from "react";
import FilterDatePicker from "../../../../components/Ui/FilterDatePicker/FilterDatePicker";

const DateFilter = props => {
    const [formInputs, changeForm] = useState([
        {
            id: 1,
            label: 'Date from',
            date: new Date()
        },
        {
            id: 2,
            label: 'Date to',
            date: new Date()
        }
    ]);

    const inputFieldsRender = () => {
        return formInputs.map((control) => {
            return (
                <FilterDatePicker
                    label={control.label}
                    date={control.date}
                    key={Math.random()}
                    id={`date-picker-${control.id}`}
                    change={date => changeDateHandler(date, control.id)}
                />)
        })
    };

    const changeDateHandler = (date, controlId) => {
        const control = formInputs.filter((control) => control.id === controlId);
        control[0].date = date;
        changeForm(formInputs);
        props.filter(formInputs[0].date, formInputs[1].date)
    };

    return (
        <div className="date-filter">
            <div className="date-filter__container">
                {inputFieldsRender()}
            </div>
        </div>
    )
};

export default DateFilter;
