class Report {
    generate (data){
        console.log("Report data:" +data);
    }
}

class HTMLReport extends Report {
    generate(data){
        console.log("<html><data>" +data +"</data></html>");

    }
}

class JSONReport extends Report {
    generate(data){
        console.log('{"report": "' +data +'"}');
    }
}
class TextReport extends Report {
    generate(data){
        console.log("=== Report data:===\n " +data +" \n      ******");
    }
}

let reports = [new Report(), new HTMLReport(), new JSONReport(), new TextReport()];
reports.forEach(function(report){
    report.generate("This is report data");
    console.log("====================================");
})

