import React from 'react'
import {Typography, Grid } from '@material-ui/core'
import {Stack, Heading, Text, Divider, Flex} from '@chakra-ui/react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Policies(){
    return(
        <Flex w={'100%'} justify={'center'}>
        <Stack direction={'column'} aling={'center'} px={8} w={['100%', '90%', '80%', '65%', '50%']} spacing={8} py={8}>
            <Heading size={'3xl'} textAlign={'center'} style={{fontWeight:'bold', letterSpacing: '0.25em'}}>OUR POLICIES</Heading>
            <Divider />
            
            <Text> Momentum is an organization that holds itself to high standards, not only in the quality of content that we produce, but as well as the ethical and moral consequences of our artistic, technological, and organizational decisions. Each section below outlines some of the policies that we hold ourselves to.</Text>

                    <ExpansionPanel style={{border: '1px solid rgba(0, 0, 0, .125)', borderBottom:'none'}}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h5' style={{fontWeight:'bold'}}>GDPR Compliance</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant='body1' style={{textAlign:'justify', paddingLeft:'1em', paddingRight:'1em'}}>
                                Data protection legislation came into force in May 2018, aiming to protect people’s privacy. The data protection laws applies to all public bodies, businesses and other organisations that process personal data. The legislation comprises the General Data Protection Regulation (GDPR) which came into force on 25 May 2018 and the new Data Protection Act (DPA) 2018 which came into force around the same time. This will provide a single regulation across the European Union (EU) and place obligations on organisations that operate outside of the EU but provide goods or services to EU citizens.
                                <br /><br />
                                While Momentum isn’t based in the European Union, we understand the importance of privacy and choice when it comes to your personal data. Therefore, our Board of Directors and IT team are currently working towards GDPR compliance. 
                                <br /><br />

                                <Typography variant='h5' style={{fontWeight:'bold'}}>Our GDPR Principles</Typography>
                                • We will process all personal data fairly and lawfully.
                                <br />
                                • We will only process personal data for specified and lawful purposes.
                                <br />
                                • We will endeavour to hold relevant and accurate personal data, which is kept up to date as far as practically possible.
                                <br />
                                • We won’t keep personal data for longer than is necessary.
                                <br />
                                • We will keep all personal data secure.
                                <br />
                                • We will endeavour to ensure that personal data is not transferred without adequate safeguards in place.
                                <br /><br />

                                <Typography variant='h5' style={{fontWeight:'bold'}}>GDPR Compliance</Typography>
                                We are continually reviewing and updating all our processes, procedures, data systems and documentation in order to ensure we remain GDPR compliant.
                                <br />
                                Momentum will be complying with the GDPR as a controller and processor of data and will implement the relevant policies and practices to ensure we protect any data we handle –
                                <br />
                                • Employees will be made aware of the GDPR and their obligations within it, with additional training sometimes being used. 
                                <br />
                                • All new employees joining will receive awareness training as part of our induction program.
                                <br /><br />
                                
                                <Typography variant='h5' style={{fontWeight:'bold'}}>Contact Us</Typography>
                                Should you require any further information about our GDPR plans and preparation, please feel free to contact us at contact@momentum.org with the subject ‘GDPR Compliance’.                            
                                <br />
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{border: '1px solid rgba(0, 0, 0, .125)', borderBottom:'none'}}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h5' style={{fontWeight:'bold'}}>Momentum Member Agreement</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant='body1' style={{textAlign:'justify', paddingLeft:'1em', paddingRight:'1em'}}>
                                All employees in the Momentum team have agreed to follow the conditions below.
                                <br /><br />

                                <Typography variant='h5' style={{fontWeight:'bold'}}>Plagiarism</Typography>
                                Plagiarism occurs when a content creator tries to pass off someone else’s work as their own. At Momentum, we require everyone in our team to follow these requirements:
                                <br />
                                • Content creators cannot copy elements of another author’s work that are not common knowledge, including artwork, data tables and equations, without citing the source.
                                <br />
                                • If content creators use data that they didn’t create, they must cite all their sources in APA Format.
                                <br />
                                • Content creators cannot use text downloaded from the Internet.
                                <br />
                                • If content creators self-plagiarise (copy from work they have completed previously), they must cite all original sources in APA format.
                                <br /><br />
                                Our process for identifying plagiarism works as follows – 
                                <br />
                                • After the writer’s piece has been written and edited, it will be checked for plagiarism.
                                <br />
                                • If the system detects &lt;5 % plagiarism, we will make the writers rewrite affected sections before the writing piece is published.
                                <br />
                                • If the system detects &lt;30% plagiarism, we will require writers to rewrite affected sections and the article to go through the editing process again.
                                <br />
                                • If the system detects &gt;= 30% plagiarism, the work will be rejected.
                                <br />
                                If something has slipped through our checks and you detect plagiarism in a published article, please let us know at contact@ourmomentum.org. Please include the article title, as well as the original source that was plagiarised.
                                <br /><br />

                                <Typography variant='h5' style={{fontWeight:'bold'}}>Intellectual Property</Typography>
                                At Momentum, all the writing, editing and designing are done by a team of volunteers – people who believed in Momentum’s vision. As a result, we don’t feel it’s right to claim their work as our intellectual property.
                                <br />
                                • Any work done by a team member that contributed to Momentum is the intellectual property of that member.
                                <br />
                                • Said member may freely share and disseminate their work outside Momentum.
                                <br />
                                • If a member’s work is based on / combined with other members’ intellectual property, they must source Momentum and all the other members when sharing their work. (For e.g. when a writer shares their work outside Momentum, they must credit their editors).
                                <br />
                                • If a member leaves Momentum, we reserve the right to keep their work on our magazine / website, provided we credit members accordingly.
                                <br />
                                • In accordance with 4, we will ask all team members to complete a declaration before submitting work to Momentum.
                                <br />
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{border: '1px solid rgba(0, 0, 0, .125)', borderBottom:'none'}}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant='h5' style={{fontWeight:'bold'}}>Advertising Policy</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant='body1' style={{textAlign:'justify', paddingLeft:'1em', paddingRight:'1em'}}>
                                • All advertisements and sponsored content across Momentum’s platform do not necessarily reflect the views of our organisation, and are separate from editorial decisions. Momentum does not endorse or support any product or service advertised on our platform.  
                                <br />
                                • We reserve the right to reject and not publish advertisements that may harm the Momentum brand or is not aligned with our vision and content.
                                <br />
                                • We will not accept advertisements from health-damaging products, including alcohol, nicotine and tobacco. In addition, we will not publish any medical or drug based advertisements.
                                <br />
                                • We will never publish ‘advertorial’ content, and all sponsored products and services will be clearly indicated as such.
                                <br />
                                • Advertisements may not be deceptive, and must clearly identify the advertiser and product being offered. 
                                <br />
                                • Advertisements that support or oppose any particular person, gender, sexual orientation, ethnicity or religion are not allowed on our platform.
                                <br />
                                • Advertisements will be removed if a member of the Executive Team or the Board of Directors deems it necessary.
                                <br />
                                If you have any questions or complaints, please direct them to contact@ourmomentum.org
                                <br />
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
        </Stack>
        </Flex>
      )

}   
