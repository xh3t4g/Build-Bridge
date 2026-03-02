export function RenderCard(vendor) {
    let div_card = document.createElement('div');
    div_card.classList.add('card');

    let img_card = document.createElement('img');
    img_card.src = vendor.img;

    let card_content_div_card = document.createElement('div');
    card_content_div_card.classList.add('card-content');

    let span_card = document.createElement('span');
    span_card.textContent = vendor.name;

    let card_button_div_card = document.createElement('div');
    card_button_div_card.classList.add('card-button');

    let a_tg = document.createElement('a');
    a_tg.href = 'https://t.me/cnskfho';
    a_tg.textContent = "Написать";

    card_content_div_card.append(span_card);
    card_button_div_card.append(a_tg)
    div_card.append(img_card, card_content_div_card, card_button_div_card)

    return div_card;
}
