import FacebookFactory from "./factories/facebook/facebook-factory";
import LinkedinFactory from "./factories/linkedin/linkedin-factory";
import SlackFactory from "./factories/slack/slack-factory";
import Publisher from "./publisher";



const content = `
Solo por hoy, cualquier curso a US$ 5.99,

 https://kodoti.com/super-oferta
`;

const publisher = new Publisher(content);

publisher.send(new FacebookFactory());
publisher.send(new LinkedinFactory());
publisher.send(new SlackFactory());