import React from 'react';

const TaskEdit: React.FC = () => {
  return (
    <article className="card card--edit card--yellow card--repeat">
      <form className="card__form" method="get">
        <div className="card__inner">
          <div className="card__color-bar">
            <svg className="card__color-bar-wave" width="100%" height="10">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>

          <div className="card__textarea-wrap">
            <label htmlFor="task-text">
              <textarea
                className="card__text"
                placeholder="Start typing your text here..."
                name="text"
                id="task-text"
              >
                This is example of task edit. You can set date and choose repeating days and color.
              </textarea>
            </label>
          </div>

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <button className="card__date-deadline-toggle" type="button">
                  date: <span className="card__date-status">yes</span>
                </button>

                <fieldset className="card__date-deadline">
                  <label className="card__input-deadline-wrap" aria-label="Deadline date">
                    <input
                      className="card__date"
                      type="text"
                      placeholder=""
                      name="date"
                      id="task-date"
                      value="23 September 16:15"
                    />
                  </label>
                </fieldset>

                <button className="card__repeat-toggle" type="button">
                  repeat: <span className="card__repeat-status">yes</span>
                </button>

                <fieldset className="card__repeat-days">
                  <div className="card__repeat-days-inner">
                    {['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'].map((day) => (
                      <React.Fragment key={day}>
                        <input
                          className="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id={`repeat-${day}-4`}
                          name="repeat"
                          value={day}
                          defaultChecked={['tu', 'fr', 'su'].includes(day)}
                        />
                        <label className="card__repeat-day" htmlFor={`repeat-${day}-4`}>
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
                      id={`color-${color}-4`}
                      className={`card__color-input card__color-input--${color} visually-hidden`}
                      name="color"
                      value={color}
                      defaultChecked={color === 'yellow'}
                    />
                    <label
                      className={`card__color card__color--${color}`}
                      htmlFor={`color-${color}-4`}
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
              delete
            </button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default TaskEdit;
