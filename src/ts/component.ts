import * as hb from 'handlebars';
import * as $ from 'jquery';

export class Component {
    private templateName: string;
    constructor(private template: string) {}

    getTemplate(cb: any) {
        $.get('/src/templates/' + this.templateName + '.html')
            .done(function (data) {
                cb(hb.compile(data));
            });
    }

    render(context: object, elem: any) {
        this.getTemplate(function (template: any) {
            var html = template(context);
            elem.innerHTML += html;
        });
    }
}