import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';
import translateLabel from '../../utils/translateLabel';
import SplitButton, {ControlLabel, DropdownButton, Form, FormGroup, MenuItem} from "react-bootstrap";

const Repeat = ({
                    id,
                    repeat: {
                        frequency,
                        yearly,
                        monthly,
                        weekly,
                        daily,
                        hourly,
                        options,
                    },
                    handleChange,
                    translations
                }) => {
    const isOptionAvailable = option => !options.frequency || options.frequency.indexOf(option) !== -1;
    const isOptionSelected = option => frequency === option;

    return (
        <div className="px-3">
            <div className="form-group row repeat-frequency">
              <Form>
                <FormGroup>
                  <ControlLabel>
                    {translateLabel(translations, 'repeat.label')}
                  </ControlLabel>
                  <SplitButton
                      bsStyle={'primary'}
                      title={translateLabel(translations, 'repeat.label')}
                      key={frequency}
                      id={`dropdown-basic`}
                      onSelect={eventKey => handleChange({target: {name: 'repeat.frequency', value: eventKey}})}
                      name={'repeat.frequency'}
                  >
                    {isOptionAvailable('Yearly') &&
                    <MenuItem eventKey="Yearly">{translateLabel(translations, 'repeat.yearly.label')}</MenuItem>}
                    {isOptionAvailable('Monthly') &&
                    <MenuItem eventKey="Monthly">{translateLabel(translations, 'repeat.monthly.label')}</MenuItem>}
                    {isOptionAvailable('Weekly') &&
                    <MenuItem eventKey="Weekly">{translateLabel(translations, 'repeat.weekly.label')}</MenuItem>}
                    {isOptionAvailable('Daily') &&
                    <MenuItem eventKey="Daily">{translateLabel(translations, 'repeat.daily.label')}</MenuItem>}
                    {isOptionAvailable('Hourly') &&
                    <MenuItem eventKey="Hourly">{translateLabel(translations, 'repeat.hourly.label')}</MenuItem>}
                  </SplitButton>
                </FormGroup>

              </Form>


                {/*<div className="col-sm-2 text-sm-right">*/}
                {/*    <label*/}
                {/*        htmlFor={`${id}-frequency`}*/}
                {/*        className="col-form-label"*/}
                {/*    >*/}
                {/*        <strong>*/}
                {/*            {translateLabel(translations, 'repeat.label')}*/}
                {/*        </strong>*/}
                {/*    </label>*/}
                {/*</div>*/}
                {/*<div className="col-sm-6">*/}
                {/*    <select*/}
                {/*        name="repeat.frequency"*/}
                {/*        id={`${id}-frequency`}*/}
                {/*        className="form-control"*/}
                {/*        value={frequency}*/}
                {/*        onChange={handleChange}*/}
                {/*    >*/}
                {/*        {isOptionAvailable('Yearly') &&*/}
                {/*        <option value="Yearly">{translateLabel(translations, 'repeat.yearly.label')}</option>}*/}
                {/*        {isOptionAvailable('Monthly') &&*/}
                {/*        <option value="Monthly">{translateLabel(translations, 'repeat.monthly.label')}</option>}*/}
                {/*        {isOptionAvailable('Weekly') &&*/}
                {/*        <option value="Weekly">{translateLabel(translations, 'repeat.weekly.label')}</option>}*/}
                {/*        {isOptionAvailable('Daily') &&*/}
                {/*        <option value="Daily">{translateLabel(translations, 'repeat.daily.label')}</option>}*/}
                {/*        {isOptionAvailable('Hourly') &&*/}
                {/*        <option value="Hourly">{translateLabel(translations, 'repeat.hourly.label')}</option>}*/}
                {/*    </select>*/}
                {/*</div>*/}
            </div>
            <div className={'repeat-configuration'}>
                {
                    isOptionSelected('Yearly') &&
                    <RepeatYearly
                        id={`${id}-yearly`}
                        yearly={yearly}
                        handleChange={handleChange}
                        translations={translations}
                    />
                }
                {
                    isOptionSelected('Monthly') &&
                    <RepeatMonthly
                        id={`${id}-monthly`}
                        monthly={monthly}
                        handleChange={handleChange}
                        translations={translations}
                    />
                }
                {
                    isOptionSelected('Weekly') &&
                    <RepeatWeekly
                        id={`${id}-weekly`}
                        weekly={weekly}
                        handleChange={handleChange}
                        translations={translations}
                    />
                }
                {
                    isOptionSelected('Daily') &&
                    <RepeatDaily
                        id={`${id}-daily`}
                        daily={daily}
                        handleChange={handleChange}
                        translations={translations}
                    />
                }
                {
                    isOptionSelected('Hourly') &&
                    <RepeatHourly
                        id={`${id}-hourly`}
                        hourly={hourly}
                        handleChange={handleChange}
                        translations={translations}
                    />
                }
            </div>

        </div>
    );
};

Repeat.propTypes = {
    id: PropTypes.string.isRequired,
    repeat: PropTypes.shape({
        frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
        yearly: PropTypes.object.isRequired,
        monthly: PropTypes.object.isRequired,
        weekly: PropTypes.object.isRequired,
        daily: PropTypes.object.isRequired,
        hourly: PropTypes.object.isRequired,
        options: PropTypes.shape({
            frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
            yearly: PropTypes.oneOf(['on', 'on the']),
            monthly: PropTypes.oneOf(['on', 'on the']),
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Repeat;
