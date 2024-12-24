import { projects } from "./_data";

export default class Script{
    constructor(){
        this.events();
        this.data = [];
    }
    events(){
        console.log("Script is on!");
        this.renderPost(projects);
        const audio = document.getElementById('myAudio');
        audio.volume = 0.7;

        $('#exampleModal').modal('show');

        $(document).on('click', '#play-music', function(){
            const _this = $(this);
            if(_this.hasClass('play')){
                _this.removeClass('play');
                audio.pause();
            } else {
                _this.addClass('play');
                audio.play().catch((error) => {
                    console.error('Error playing audio:', error);
                });
            }
        });

        const modalElement = document.getElementById('exampleModal');
        // Add event listener for the "hidden.bs.modal" event
        modalElement.addEventListener('hidden.bs.modal', function () {
            console.log('Modal has been closed!');
            $('#play-music').click();
        });
    }

    renderTag(data=[]){
        let html = '';
        data?.forEach((el, i)=>{
            html += `<span class="${el.class}">${el.title}</span>`
        });
        return html;
    }
    renderPost(data=[]){
        const appendHtml = $("#post-development");
        const _this = this;
        data?.forEach((element, index)=>{
            appendHtml.append(`
                <li>
                    <div class="card-project">
                        <div class="card-thumb">
                            <img src="./asset/images/${element.thumb}" alt="${element.thumb}">
                            <a 
                                href="${element.link}" 
                                target="__blank" 
                                class="layer-link"
                            >
                                <i class="fa-solid fa-link"></i>
                            </a>
                        </div>
                        <div class="card-body cusor-pointer">
                            <h3 class="fs-14px">${element.category}</h3>
                            <h4 class="fs-16px fw-bold">${element.name}</h4>
                            <div class="fs-14px tags-list" style="margin-top: 5px;">
                                ${_this.renderTag(element.tags)}
                            </div>
                        </div>
                    </div>
                </li> 
            `);
        })
    }
}


