$(() => {
    $(`.available`).on(`click`, (e) => {
        // show or hide form on click
        $(`#form-container`).removeClass(`hide`);
        $(`#form-container`).addClass(`show`);
        let tableNumber = (e.target.firstChild.data);

        $(`#table-number`).text(tableNumber);

        let tableNumberId = `#table-${tableNumber}`;
        // reserve tables and hide form when click save
        $(`#save-button`).on(`click`, () => {
            $(tableNumberId).removeClass(`available`);
            $(tableNumberId).addClass(`reserved`);
            $(tableNumberId).prop(`disabled`, true);
            $(`#form-container`).removeClass(`show`);
            $(`#form-container`).addClass(`hide`);
            $(`#name`).val("");
            $(`#phone-number`).val("");
            $(`#group-size`).val("");
        });
        // hide form when click x button
        $(`#x-button`).on(`click`, () => {
            tableNumberId = null;
            $(`#form-container`).removeClass(`show`);
            $(`#form-container`).addClass(`hide`);
            $(`#name`).val("");
            $(`#phone-number`).val("");
            $(`#group-size`).val("");
        });
    })
})