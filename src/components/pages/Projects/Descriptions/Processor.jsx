import Project from "../Project";
import { ProcessorImage } from '../../../../assets/ProjectImages';

const Processor = () => {
    return (
        <Project
            title="16-bit Enhanced Processor"
            alt="Processor"
            image={ProcessorImage}
            link="https://youtu.be/JpTqb0nLZSQc"
            skills="Verilog (HDL) • Assembly • ModelSim • DESim"
            project={true}
        >
            I was part of the development of a processor featuring a 16-bit architecture and 8 registers. The processor is capable of executing various instructions like mov, movt, add, sub, ldr, str, and b, among others. <br/><br/>

            To debug the Verilog code, I employed an FSM timing diagram from ModelSim. I modified the ALU to implement instructions such as add, sub, and and. Tools like DESim were used to test the processor, which implements a word-matching game. A demonstration of this program is available through the demo link below. Code sharing is restricted due to academic integrity, but it can be provided upon request. <br/><br/>
        </Project>
    );
}

export default Processor;