import {Button, Grid} from '@material-ui/core';
import AvatarBlock from '../Home/Avatar';
import InputComponentDashboard from '../Orders/Input';
import GreetingText from './TextCustom';
import {styleText} from './TextCustom/style';
import PaperImage from './PaperImage';
import brokenImg from '../../../../images/supportImg/devicebroken.png';
import devicelostIMG from '../../../../images/supportImg/devicelost.png';
import simcard from '../../../../images/supportImg/simcard.png';
import callbackIMG from '../../../../images/supportImg/callback.png';
import {style} from './style';
import Questions from './PaperBlocks';
import CustomBlock from './PaperBlocks/CustomBlock';

const Support = () => {

    return (
        <Grid style={style} item xs={10}>
            <Grid container>
                <AvatarBlock/>
                <Grid style={{marginLeft: '60px'}} item xs={10}>
                    <Grid container>

                        <GreetingText text={'How can we help you'}
                                      stylesText={styleText.greeting}
                                      styleBlock={styleText.greeting.block}/>
                        {/*INPUT CONTAINER*/}
                        <Grid container>
                            <Grid item xs={8}><InputComponentDashboard
                                text={'Search'}/>
                            </Grid>
                            <Grid style={style.inputButtonContainer} item
                                  xs={2}>
                                <Button style={style.button}>Search</Button>
                            </Grid>


                            <GreetingText text={'Or choose an option below'}
                                          stylesText={styleText.secondPartText}
                                          styleBlock={styleText.secondPartText.block}/>
                        </Grid>
                        {/**/}
                        <Grid item xs={10}>
                            <Grid container>
                                <PaperImage img={brokenImg}
                                            text={'Device broken'}/>
                                <PaperImage img={devicelostIMG}
                                            text={'Device lost'}/>
                                <PaperImage img={simcard} text={'SIM card'}/>
                                <PaperImage img={callbackIMG}
                                            text={'Call Back'}/>
                            </Grid>

                        </Grid>

                        <GreetingText text={'Questions'}
                                      stylesText={styleText.thirdpart}
                                      styleBlock={styleText.secondPartText.block}/>

                        <Grid item xs={10}>
                            <Grid container>
                                <Questions/>
                                <CustomBlock text={'My contract'}/>
                                <CustomBlock text={'Return device'}/>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    );
};
export default Support;