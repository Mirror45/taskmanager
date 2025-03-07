import React from 'react';

const AddNewTask: React.FC = () => {
  return (
    <article className="card card--edit card--black">
      <form className="card__form">
        <div className="card__inner">
          <div className="card__color-bar">
            <svg width="100%" height="10">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>

          <div className="card__textarea-wrap">
            <label aria-label="Task text">
              <textarea
                className="card__text"
                placeholder="Start typing your text here..."
                name="text"
                defaultValue="This is example of new task. You can set date and choose repeating days and color."
              />
            </label>
          </div>

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <button className="card__date-deadline-toggle" type="button">
                  date: <span className="card__date-status">no</span>
                </button>

                <fieldset className="card__date-deadline" disabled>
                  <label className="card__input-deadline-wrap" aria-label="Deadline date">
                    <input
                      className="card__date"
                      type="text"
                      placeholder="23 September"
                      name="date"
                    />
                  </label>
                </fieldset>

                <button className="card__repeat-toggle" type="button">
                  repeat: <span className="card__repeat-status">no</span>
                </button>

                <fieldset className="card__repeat-days" disabled>
                  <div className="card__repeat-days-inner">
                    {['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'].map((day) => (
                      <React.Fragment key={day}>
                        <input
                          className="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id={`repeat-${day}-1`}
                          name="repeat"
                          value={day}
                          defaultChecked={['tu', 'fr', 'su'].includes(day)}
                        />
                        <label className="card__repeat-day" htmlFor={`repeat-${day}-1`}>
                          {day}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="card__colors-inner">
              <h3 className="card__colors-title">Color</h3>
              <div className="card__colors-wrap">
                {['black', 'yellow', 'blue', 'green', 'pink'].map((color) => (
                  <React.Fragment key={color}>
                    <input
                      type="radio"
                      id={`color-${color}-1`}
                      className={`card__color-input card__color-input--${color} visually-hidden`}
                      name="color"
                      value={color}
                      defaultChecked={color === 'black'}
                    />
                    <label
                      className={`card__color card__color--${color}`}
                      htmlFor={`color-${color}-1`}
                    >
                      {color}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="card__status-btns">
            <button className="card__save" type="submit">
              save
            </button>
            <button className="card__delete" type="button">
              cancel
            </button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default AddNewTask;
