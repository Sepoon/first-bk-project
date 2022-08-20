$(document).ready(function () {
    // clicking search button
    $('.search-btn').on('click', function () {
        let searchContent = $('.search-input').val();
        let params = new URLSearchParams(location.search);
        params.set('search', searchContent.trim());

        location.replace(location.pathname + '?' + params.toString());
        return false;
    });

    // Entering search input
    $('.search-input').keypress(function (e) {
        if (e.which == '13') {
            $('.search-btn').trigger('click');
        }
    });

    // check/uncheck all
    $("#form-check-all").click(function () {
        if ($(this).prop('checked')) {
            $(".form-check-input").prop('checked', true);
        } else {
            $(".form-check-input").prop('checked', false);
        }
    });

    // clicking on any checkbox should uncheck "check all" checkbox
    $(".list-checkbox").click(function () {
        if ($(".list-checkbox").length === $(".list-checkbox:checked").length)
            $("#form-check-all").prop('checked', true);
        else
            $("#form-check-all").prop('checked', false);
    });

    // execute bulk delete
    $("#bulk-delete-btn").click(function () {
        let ids = [];
        const bulkDeleteUrl = $(this).data('url')
        $(".form-check-input:checked").each(function () {
            if (!isNaN($(this).val())) {
                ids.push(Number($(this).val()));
            }
        });
        if (ids.length === 0)
            return false;
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");

        if (confirm("정말 삭제하시겠습니까?")) {
            $.ajax({
                type: "POST",
                url: bulkDeleteUrl,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {ids},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data, textStatus, jqXHR) {
                    location.reload();
                },
                error: function (request, status, error) {
                    toastr.error('항목 삭제 실패.');
                },
            }).always(function () {
            });
        }
        return false;
    });
    //using css class for multiple bulk action buttons in one page
    $(".bulk-action-btn").click(function () {
        let ids = [];
        const bulkDeleteUrl = $(this).data('url');
        const confirmMsg = $(this).data('confirm');
        $(".form-check-input:checked").each(function () {
            if (!isNaN($(this).val())) {
                ids.push(Number($(this).val()));
            }
        });
        if (ids.length === 0)
            return false;
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");

        if (confirm(confirmMsg)) {
            $.ajax({
                type: "POST",
                url: bulkDeleteUrl,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {ids},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data, textStatus, jqXHR) {
                    location.reload();
                },
                error: function (request, status, error) {
                    toastr.error('항목 삭제 실패.');
                },
            }).always(function () {
            });
        }
        return false;
    });

    $(".link-action-btn").click(function () {
        const actionUrl = $(this).data('url');
        const actionId = $(this).data('id');
        const redirectUrl = $(this).data('redirect');
        const confirmMsg = $(this).data('confirm');
        if (actionId.length === 0)
            return false;
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");

        if (confirm(confirmMsg)) {
            $.ajax({
                type: "POST",
                url: actionUrl + "/" + actionId,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function (data, textStatus, jqXHR) {
                    if (redirectUrl != null && redirectUrl != undefined && redirectUrl.length > 0) {
                        location.replace(redirectUrl);
                    } else {
                        location.reload();
                    }
                },
                error: function (request, status, error) {
                    toastr.error('작업 실패.');
                },
            }).always(function () {
            });
        }
        return false;
    });

    // clicking the sort item
    $('.sort-item').click(function () {
        let params = new URLSearchParams(location.search);
        let currentSortItem = $(this).data('sort');
        let sortDirection = params.get('sort') === currentSortItem && params.get('sortDirection') === 'ASC'
            ? 'DESC' : 'ASC';
        params.set('page', '1');
        params.set('sort', currentSortItem);
        params.set('sortDirection', sortDirection);

        location.replace(location.pathname + '?' + params.toString());
        return false;
    });

    $('header.navbar .nav-item:not(.dropdown)').hover(function () {
        $('header.navbar .nav-item:not(.dropdown)').removeClass('active')
        $(this).addClass('active');
        const target = $(this).data('target');
        $('div.navbar-expand-md').hide();
        $('div.navbar-expand-md' + target).show();
    });

    generateDaysFilter();
    checkAndShowSubNav();
});

function showFullpageLoader() {
    $('#fullpage-loader').show();
}

function hideFullpageLoader() {
    $('#fullpage-loader').hide();
}


function post(url, requestBody, callback, fallback = function () {
}, finallyCallback = function () {
}) {
    $.post(url, requestBody, function (data, status, xhr) {
        callback(data, xhr.status);
    }).fail(function (error) {
        fallback(error);
    }).always(function () {
        finallyCallback();
    })
}

function postJson(url, requestBody, callback, fallback = function (err) {
}, finallyCallback = function () {
}) {
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader();
    $.ajax({
        url: url,
        type: "POST",
        dataType: "text",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        contentType: "application/json;charset=utf-8",
        cache: false,
        data: JSON.stringify(requestBody),
    }).done(function (data) {
        callback(data);
    })
        .fail(function (err) {
            toastr.error(err.responseText);
            fallback(err);
        }).always(function () {
        finallyCallback();
        hideFullpageLoader();
    });
}

function generateDaysFilter() {
    let searchParams = new URLSearchParams(location.search);
    const initFrom = searchParams.get('from');
    const initTo = searchParams.get('to');
    if ($('#days-filter').length > 0 && $('#from').length > 0 && $('#to').length > 0) {

        const daysFilter = new Litepicker({
            element: document.getElementById('days-filter'),
            singleMode: false,
            buttonText: {
                previousMonth: '<i class="ti ti-chevron-left"></i>',
                nextMonth: '<i class="ti ti-chevron-right"></i>',
            },
        });

        if (initFrom && initTo) {
            daysFilter.setDateRange(initFrom, initTo);
        }

        $("form").submit(function () {
            $('#from').val(daysFilter.getStartDate().format('YYYY-MM-DD'))
            $('#to').val(daysFilter.getEndDate().format('YYYY-MM-DD'))
        });
    }

    if ($('#from-filter').length > 0 && $('#from').length > 0) {

        const daysFilter = new Litepicker({
            element: document.getElementById('from-filter'),
            singleMode: true,
            buttonText: {
                previousMonth: '<i class="ti ti-chevron-left"></i>',
                nextMonth: '<i class="ti ti-chevron-right"></i>',
            },
        });

        if (initFrom) {
            daysFilter.setDateRange(initFrom, initFrom);
        }

        $("form").submit(function () {
            $('#from').val(daysFilter.getStartDate().format('YYYY-MM-DD'))
        });
    }
}

function checkAndShowSubNav() {
    let path = location.pathname;
    $("div.navbar-expand-md").each(function () {
        const listPathAccepts = ($(this).data('accepts') || '').split('|');
        if (listPathAccepts.find(item => item === '/' ? path === item : path.toLowerCase().startsWith(item.toLowerCase()))) {
            $(this).show();
            $(this).addClass("default");
            return false;
        }
    });
}

function showUserInfoModal(actionId) {
    //it is possible to open user info modal from currentsessions modal, so always try to hide currentsessions modal just in case
    $('#modal-currentsessions').modal('hide');

    $('#user-info-modal .modal-title__tab').removeClass('active');
    $('#user-info-modal .modal-title__tab').first().addClass('active');
    $('#user-info-modal .modal-body.log').hide();
    $('#user-info-modal .modal-body.info').show();

    if (!actionId || actionId.length === 0)
        return false;
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader()
    $.ajax({
        type: "GET",
        url: '/user/detail.asp?usrid=' + actionId,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data, textStatus, jqXHR) {
            const createdDate = moment(data.created).format('yyyy-MM-DD hh:mm:ss');
            var lastLoginDate = "";
            if (data.lastLoginDate) {
                lastLoginDate = moment(data.lastLoginDate).format('yyyy-MM-DD hh:mm:ss');
            }

            $("input[name=username]").val(data.userName);
            $("input[name=nickname]").val(data.nickName);
            $("input[name=referrer]").val(data.referrer);
            $("select[name=level]").val(String(data.level));
            $("#user-balance").html(accounting.formatNumber(data.balance ?? 0));
            $("#user-point").html(accounting.formatNumber(data.point ?? 0));
            $("#user-transactionlog-url").attr("href", "/transaction/list?searchBy=username&search=" + data.userName + "&from=&to=");
            $("#user-pointlog-url").attr("href", "/transaction/points?searchBy=username&search=" + data.userName + "&from=&to=");
            $("#user-phoneNumber").val(data.phoneNumber ?? '');
            // $("#user-partnerType").val(data.partnerType);
            // $("#user-partnerType").trigger('change');
            $("#user-isSingleBetDisabled").prop('checked', data.isSingleBetDisabled);
            $("#user-isDoubleBetDisabled").prop('checked', data.isDoubleBetDisabled);
            $("#user-totalDeposit").text((data.totalDeposit ?? 0).toLocaleString());
            $("#user-totalWithdraw").text((data.totalWithdraw ?? 0).toLocaleString());
            $("#user-referrer").val(data.referrer ?? '');
            $("#user-partner1").text(data.partner1 ?? '');
            $("#user-partner2").text(data.partner2 ?? '');
            $("#user-partner3").text(data.partner3 ?? '');
            $("#user-created").text(createdDate);
            $("#user-createdIp").text(data.createdIp ?? '');
            $("#user-lastLoginDate").text(lastLoginDate ?? '');
            $("#user-lastLoginIp").text(data.lastLoginIp ?? '');
            $("#user-description").val(data.description);
            $("#user-depositBonusFirst").val(data.depositbonusFirst ?? 0);
            $("#user-depositBonusNormal").val(data.depositbonusNormal ?? 0);

            $("#user-status").prop('checked', data.status == 10);

            $("#user-numLogins").text(data.numLogins ?? '0');
            $("#user-numBets").text(data.numBets ?? '0');
            $("#user-bankholderName").val(data.bankholderName ?? '');
            $("#user-bankName").val(data.bankName ?? '');
            $("#user-bankAccount").val(data.bankAccount ?? '');

            $("#user-partnerDepositPct").val(data.partnerDepositPct ?? '');
            $("#user-partnerMinigamePct").val(data.partnerMinigamePct ?? '');
            $("#user-partnerCasinoPct").val(data.partnerCasinoPct ?? '');
            $("#user-partnerPrematchPct").val(data.partnerPrematchPct ?? '');
            $("#user-partnerInplayPct").val(data.partnerInplayPct ?? '');

            if (data.emailMarketing) {
                $("#user-emailMarketing").prop("checked", true);
            } else {
                $("#user-emailMarketing").prop("checked", false);
            }

            if (data.smsMarketing) {
                $("#user-smsMarketing").prop("checked", true);
            } else {
                $("#user-smsMarketing").prop("checked", false);
            }

            $("#edit-user-submit-btn").data('id', actionId);

            $("#prematchBetSlipsTb tbody").html(data.prematchBetSlips ? data.prematchBetSlips.map(betSlip => `<tr class="row-header row-expanded" data-betslipid="${betSlip.id}">
                                    <td>${betSlip.id}</td>
                                    <td>${moment(betSlip.created).format('yyyy-MM-dd HH:mm')}</td>
                                    <td class="text-right">${getTotalOdds(betSlip.bets)}</td>
                                    <td class="text-right">${formatNumberWithComma(betSlip.betAmount)}</td>
                                    <td class="text-right">${getTotalExpectedWinAmount(betSlip.bets, betSlip.betAmount)}</td>
                                    <td class="text-right">
                                        ${betSlip.wonAmount ? `<span>${formatNumberWithComma(betSlip.wonAmount)}</span>` : ''}
                                    </td>
                                    <td>${renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}</td>
                                    <td class="row-expand">
                                        <i class="ti ti-chevron-down"></i>
                                    </td>
                                </tr>
                                <tr style="display: none;">
                                    <td colspan="8">
                                        <table class="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                                            <thead>
                                            <tr>
                                                <th>경기시간</th>
                                                <th>방식</th>
                                                <th>종목</th>
                                                <th>경기ID</th>
                                                <th>팀명</th>
                                                <th align="center" class="w-1">승/언더</th>
                                                <th align="center" class="w-1">무/라인</th>
                                                <th align="center" class="w-1">패/오버</th>
                                                <th align="center" class="w-1">점수</th>
                                                <th align="center">배팅</th>
                                                <th class="w-1">결과</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            ${
                betSlip.bets && betSlip.bets.map(bet => {
                    let HTML = '';

                    if (isBetWdl(bet)) {
                        HTML += `<tr class="betrow-wdl" data-betid="${bet.id}">
                                                            <td>${moment(bet.startDate).format('yyyy-MM-dd HH:mm')}</td>
                                                            <td>${bet.marketName}</td>
                                                            <td>${renderSportNameFromSportId(bet.sportId)}</td>
                                                            <td>${bet.fixtureId}</td>
                                                            <td>
                                                                <span>${bet.homeTeamName}</span> vs.
                                                                <span>${bet.awayTeamName}</span>
                                                            </td>
                                                            <td align="center" class="w-1 ${bet.oddName == '1' ? 'selected' : ''}">${bet.odd1}</td>
                                                            <td align="center" class="w-1 ${bet.oddName == '1' ? 'selected' : ''}">
                                                                ${bet.odd2 ? bet.odd2 : 'VS'}
                                                            </td>
                                                            <td align="center" class="w-1 ${bet.oddName == '2' ? 'selected' : ''}">${bet.odd3}</td>
                                                            <td align="center" class="w-1" data-home="${bet.homeTeamScore}" data-away="${bet.awayTeamScore}">
                                                                <span>${bet.homeTeamScore || ''}</span> :
                                                                <span>${bet.awayTeamScore || ''}</span>
                                                            </td>
                                                            <td align="center">
                                                                ${bet.oddName == '1' ? '홈팀' : bet.oddName == '2' ? '원정팀' : bet.oddName == 'X' ? '무승부' : ''}
                                                            </td>
                                                            <td class="w-1">${renderBetStatus(bet.settlementRate)}</td>
                                                        </tr>`
                    }
                    if (isBetHandicapOrUO(bet)) {
                        HTML += `<tr class="betrow-handicapuo" data-betid="${bet.id}">
                                                            <td>${moment(bet.startDate).format('yyyy-MM-dd HH:mm')}</td>
                                                            <td>${bet.marketName}</td>
                                                            <td>${renderSportNameFromSportId(bet.sportId)}</td>
                                                            <td>${bet.fixtureId}</td>
                                                            <td>
                                                                <span>${bet.homeTeamName}</span> vs.
                                                                <span>${bet.awayTeamName}</span>
                                                            </td>
                                                            <td align="center" class="w-1 ${bet.oddName == '1' || bet.oddName == 'Under' ? 'selected' : ''}">${bet.odd1}</td>
                                                            <td align="center" class="w-1">
                                                                ${bet.line ? bet.line : bet.baseLine ? bet.baseLine : ''}
                                                            </td>
                                                            <td align="center" class="w-1 ${bet.oddName == '2' || bet.oddName == 'Over' ? 'selected' : ''}">${bet.odd3}</td>
                                                            <td align="center" class="w-1" data-home="${bet.homeTeamScore}" data-away="${bet.awayTeamScore}">
                                                                <span>${bet.homeTeamScore || ''}</span> :
                                                                <span>${bet.awayTeamScore || ''}</span>
                                                            </td>
                                                            <td align="center">${bet.oddName}</td>
                                                            <td class="w-1">${renderBetStatus(bet.settlementRate)}</td>
                                                        </tr>`;
                    }
                    if (isBetBonus(bet)) {
                        HTML += `<tr class="betrow-bonus" data-betid="${bet.id}">
                                                            <td>${moment(bet.startDate).format('yyyy-MM-dd HH:mm')}</td>
                                                            <td>보너스</td>
                                                            <td colspan="3">
                                                                ${bet.oddName ? bet.oddName : '보너스'}
                                                            </td>
                                                            <td colspan="5" align="center">
                                                                <span>${bet.odds}</span>
                                                            </td>
                                                            <td class="w-1">${renderBetStatus(bet.settlementRate)}</td>
                                                        </tr>`
                    }
                    if (isBetSpecial(bet)) {
                        HTML += `<tr class="betrow-special" data-betid="${bet.id}">
                                                            <td>${moment(bet.startDate).format('yyyy-MM-dd HH:mm')}</td>
                                                            <td>
                                                                ${bet.marketName ? bet.marketName : '스페셜 베팅'}
                                                            </td>
                                                            <td>${renderSportNameFromSportId(bet.sportId)}</td>
                                                            <td>${bet.fixtureId}</td>
                                                            <td>
                                                                <span>${bet.homeTeamName}</span> vs.
                                                                <span>${bet.awayTeamName}</span>
                                                            </td>
                                                            <td colspan="4">
                                                                ${bet.oddName ? bet.oddName : '스페셜 베팅'}
                                                            </td>
                                                            <td align="center">
                                                                <span>${bet.odds}</span>
                                                            </td>
                                                            <td class="w-1">${renderBetStatus(bet.settlementRate)}</td>
                                                        </tr>`;
                    }
                    return HTML;
                }).join('')
            }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>`).join('') : '');
            $("#inplayBetSlipsTb tbody").html(data.inplayBetSlips ? data.inplayBetSlips.map(betSlip => `<tr class="row-header row-expanded" data-betslipid="${betSlip.id}">
                                    <td>${betSlip.id}</td>
                                    <td>${moment(betSlip.created).format('yyyy-MM-dd HH:mm')}</td>
                                    <td>${getTotalOdds(betSlip.bets)}</td>
                                    <td class="text-right">${formatNumberWithComma(betSlip.betAmount)}</td>
                                    <td class="text-right">${getTotalExpectedWinAmount(betSlip.bets, betSlip.betAmount)}</td>
                                    <td class="text-right">
                                        ${betSlip.wonAmount ? `<span>${formatNumberWithComma(betSlip.wonAmount)}</span>` : ''}
                                    </td>
                                    <td>${renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}</td>
                                    <td class="row-expand">
                                        <i class="ti ti-chevron-down"></i>
                                    </td>
                                </tr>
                                <tr style="display: none;">
                                    <td colspan="8">
                                        <table class="table card-table table-vcenter text-nowrap datatable table-bordered table-compact">
                                            <thead>
                                                <tr>
                                                    <th>경기시간</th>
                                                    <th>마켓</th>
                                                    <th>종목</th>
                                                    <th>경기ID</th>
                                                    <th>팀명</th>
                                                    <th>타입</th>
                                                    <th align="center" class="w-1">배당</th>
                                                    <th align="center" class="w-1">점수</th>
                                                    <th class="w-1">결과</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${betSlip.bets && betSlip.bets.map(bet => `<tr>
                                                <td>${moment(bet.startDate).format('yyyy-MM-dd HH:mm')}</td>
                                                <td>${bet.marketName}</td>
                                                <td>${renderSportNameFromSportId(bet.sportId)}</td>
                                                <td>${bet.fixtureId}</td>
                                                <td>
                                                    <span>${bet.homeTeamName}</span> vs.
                                                    <span>${bet.awayTeamName}</span>
                                                </td>
                                                <td>${bet.oddName}</td>
                                                <td align="center" class="w-1">${bet.odds}</td>
                                                <td align="center" class="w-1">
                                                    <span>${bet.homeTeamScore || ''}</span> :
                                                    <span>${bet.awayTeamScore || ''}</span>
                                                </td>
                                                <td class="w-1">${renderBetStatus(bet.settlementRate)}</td>
                                            </tr>`).join('')}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>`).join('') : '');
            $("#transactionLogsTb tbody").html(data.transactionLogs ? data.transactionLogs.map(log => `<tr>
                                <td>${log.id}</td>
                                <td>${renderTransactionLogActionType(log.actionType)}</td>
                                <td class="text-right">${formatNumberWithComma(log.beforeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.changeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.afterValue)}</td>
                                <td>${log.changeDesc}</td>
                                <td>${log.ipAddress}</td>
                                <td>${moment(log.created).format('yyyy-MM-dd HH:mm:ss')}</td>
                            </tr>`).join('') : '');
            $("#cashLogsTb tbody").html(data.cashLogs ? data.cashLogs.map(log => `<tr>
                                <td>${log.id}</td>
                                <td>${renderTransactionCashLogActionType(log.actionType)}</td>
                                <td class="text-right">${formatNumberWithComma(log.beforeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.changeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.afterValue)}</td>
                                <td>${log.changeDesc}</td>
                                <td>${log.ipAddress}</td>
                                <td>${moment(log.created).format('yyyy-MM-dd HH:mm:ss')}</td>
                            </tr>`).join('') : '');
            $("#pointLogsTb tbody").html(data.pointLogs ? data.pointLogs.map(log => `<tr>
                                <td>${log.id}</td>
                                <td>${renderTransactionPointLogActionType(log.actionType)}</td>
                                <td class="text-right">${formatNumberWithComma(log.beforeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.changeValue)}</td>
                                <td class="text-right">${formatNumberWithComma(log.afterValue)}</td>
                                <td>${log.changeDesc}</td>
                                <td>${log.ipAddress}</td>
                                <td>${moment(log.created).format('yyyy-MM-dd HH:mm:ss')}</td>
                            </tr>`).join('') : '');
            $("#loginLogsTb tbody").html(data.loginLogs ? data.loginLogs.map(log => `<tr>
                <td>${log.id}</td>
                <td>${log.requestIp}</td>
                <td>${log.userAgent}</td>
                <td>${log.loginDate}</td>
            </tr>`).join('') : '');

            $('#minigameLogsTb tbody').html(data.minigameBetSlips ? data.minigameBetSlips.map(betSlip => `
                <tr class="row-header row-expanded betslip-item-header" data-betslipid="${betSlip.id}">
                    <td colspan="5">
                        배팅시간: <span>${moment(betSlip.created).format('yyyy-MM-dd HH:mm:ss')}</span>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        배팅금액: <span class="bold">${formatNumberWithComma(betSlip.betAmount)}</span> (<span class="text-right">${formatNumberWithComma(betSlip.bets ? betSlip.bets.reduce((a, b) => a * b.odds, 1) : 0, 3)}</span>)
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        예상적중금액: <span class="bold">${formatNumberWithComma(betSlip.bets ? betSlip.bets.reduce((a, b) => a * b.odds, 1) * betSlip.betAmount : 0)}</span>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        ${betSlip.wonAmount ? `적중금액: <span class="bold">${formatNumberWithComma(betSlip.wonAmount)}</span>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;` : ''}
                        번호: <span>${betSlip.id}</span>
                    </td>
                    <td align="center">${renderBetSlipStatus(betSlip.status, betSlip.wonAmount)}</td>
                </tr>
                ${betSlip.bets ? betSlip.bets.map(bet => `
                    <tr>
                        <td>마감시간: <span>${moment(betSlip.settled).format('yyyy-MM-dd HH:mm:ss')}</span></td>
                        <td class="ps-5">${renderMinigameKoreanNameByType(bet.type)}</td>
                        <td><span>${bet.minigameRoundId}</span>회차</td>

                        <td>${renderMinigameMarketResultKoreanNameByType(bet.type, bet.market, bet.result)}</td>
                        <td align="center" class="w-1">${bet.odds}</td>
                        <td align="center" class="w-1">${renderMinigameBetStatusNameByType(bet.status)}</td>
                    </tr>
                `).join('') : ''}
            `) : '')

            $("#user-info-modal").modal("show");
        },
        error: function (request, status, error) {
            toastr.error('작업이 실패했습니다.');
        },
    }).always(function () {
        hideFullpageLoader();
    });
}

$("#edit-user-submit-btn").click(function () {
    const id = $(this).data('id');
    const data = {
        // phoneNumber: $("#user-phoneNumber").val(),
        // level: $("select[name=level]").val(),
        isSingleBetDisabled: $("#user-isSingleBetDisabled").is(':checked'),
        isDoubleBetDisabled: $("#user-isDoubleBetDisabled").is(':checked'),
        depositbonusFirst: $("#user-depositBonusFirst").val(),
        depositbonusNormal: $("#user-depositBonusNormal").val(),
        // referrer: $("#user-referrer").val(),
        description: $("#user-description").val(),
        status: $("#user-status").is(':checked') ? 10 : 1,

        // bankholderName: $("#user-bankholderName").val(),
        // bankName: $("#user-bankName").val(),
        // bankAccount: $("#user-bankAccount").val(),

        // partnerType: Number($("#user-partnerType").val()),
        partnerDepositPct: $("#user-partnerDepositPct").val(),
        partnerMinigamePct: $("#user-partnerMinigamePct").val(),
        partnerCasinoPct: $("#user-partnerCasinoPct").val(),
        partnerPrematchPct: $("#user-partnerPrematchPct").val(),
        partnerInplayPct: $("#user-partnerInplayPct").val(),
    }
    postJson(`/user/popupedit/${id}`, data, function () {
        location.reload();
    });
    return false;
});

function renderMinigameBetStatusNameByType(status) {
    switch (status) {
        case 1:
            return "적중";
        case 2:
            return "미적중";
        case 3:
            return "무승부";
        case 4:
            return "취소";
        default:
            return "대기";
    }
}

function renderMinigameMarketResultKoreanNameByType(type, marketType, result) {
    if (type == null) {
        return "";
    }
    if (type === 14) { //SUTDA
        if (marketType === 1) { //AGUI_JJACKGUI
            if (result != null && result === 2) {
                return "짝귀";
            }
            return "아귀";
        }
    }
    if (type === 13) { //SOCCER
        if (marketType === 1) { //GOAL_NOGOAL
            if (result !== null && result === 2) {
                return "No goal";
            }
            return "Goal";
        } else if (marketType === 2) { //KEEPER_LEFT_RIGHT
            if (result != null && result === 2) {
                return "Keeper 우";
            }
            return "Keeper 좌";
        } else if (marketType === 21) {//KEEPER_LEFT_KICKER_LEFT
            return "Keeper 좌 Kicker 좌";
        } else if (marketType === 22) {//KEEPER_LEFT_KICKER_RIGHT
            return "Keeper 좌 Kicker 우";
        } else if (marketType === 23) {//KEEPER_RIGHT_KICKER_LEFT
            return "Keeper 우 Kicker 좌";
        } else if (marketType === 24) {//KEEPER_RIGHT_KICKER_RIGHT
            return "Keeper 우 Kicker 우";
        } else if (marketType === 3) {//KICKER_LEFT_RIGHT
            if (result != null && result === 2) {
                return "Kicker 우";
            }
            return "Kicker 좌";
        }
    }
    if (type === 11) {//BASEBALL
        if (marketType === 1) {//ODD_EVEN
            if (result != null && result === 2) {
                return "짝";
            }
            return "홀";
        } else if (marketType === 2) {//LEFT_RIGHT
            if (result != null && result === 2) {
                return "우";
            }
            return "좌";
        } else if (marketType == 21) {//LEFT_THREE_LINES
            return "좌3";
        } else if (marketType === 22) {//LEFT_FOUR_LINES
            return "좌4";
        } else if (marketType === 23) {//RIGHT_THREE_LINES
            return "우3";
        } else if (marketType === 24) {//RIGHT_FOUR_LINES
            return "우4";
        } else if (marketType === 3) {//THREE_FOUR_LINES
            if (result != null && result === 2) {
                return "4";
            }
            return "3";
        }
    }
    if (type === 12) {//CRICKET
        if (marketType === 1) {//SCORE_OUT
            if (result != null && result === 2) {
                return "아웃";
            }
            return "득점";
        } else if (marketType === 2) {//BATTER_LEFT_RIGHT
            if (result != null && result === 2) {
                return "타자 우";
            }
            return "타자 좌";
        } else if (marketType === 21) {//BATTER_LEFT_OUTFIELD_LEFT
            return "타자 좌 외야 좌";
        } else if (marketType === 22) {//BATTER_LEFT_OUTFIELD_RIGHT
            return "타자 좌 외야 우";
        } else if (marketType === 23) {//BATTER_RIGHT_OUTFIELD_LEFT
            return "타자 우 외야 좌";
        } else if (marketType === 24) {//BATTER_RIGHT_OUTFIELD_RIGHT
            return "타자 우 외야 우";
        } else if (marketType === 3) {//OUTFIELD_LEFT_RIGHT
            if (result != null && result === 2) {
                return "외야 우";
            }
            return "외야 좌";
        }
    }
    if (type === 1 || type === 2 || type === 3) { //POWERBALL_ONEMIN|POWERBALL_TWOMIN|POWERBALL_THREEMIN
        if (marketType === 1) {//REGULAR_ODD_EVEN
            if (result != null && result === 2) {
                return "일반볼합(짝)";
            }
            return "일반볼합(홀)";
        } else if (marketType === 2) {//REGULAR_UNDER_OVER
            if (result != null && result === 2) {
                return "일반볼합(언더)";
            }
            return "일반볼합(오버)";
        } else if (marketType === 5) {//REGULAR_LARGE_SMALL
            if (result != null && result === 3) {
                return "일반볼합(소)";
            }
            return "일반볼합(대)";
        } else if (marketType === 6) {//REGULAR_MEDIUM
            return "일반볼합(중)";
        } else if (marketType === 11) {//POWERBALL_ODD_EVEN
            if (result != null && result === 2) {
                return "파워볼(짝)";
            }
            return "파워볼(홀)";
        } else if (marketType === 12) {//POWERBALL_UNDER_OVER
            if (result != null && result === 2) {
                return "파워볼(언더)";
            }
            return "파워볼(오버)";
        } else if (marketType === 21) {//REGULAR_ODD_OVER
            return "일반볼합(홀+오버)";
        } else if (marketType === 22) {//REGULAR_ODD_UNDER
            return "일반볼합(홀+언더)";
        } else if (marketType === 23) {//REGULAR_EVEN_OVER
            return "일반볼합(짝+오버)";
        } else if (marketType === 24) {//REGULAR_EVEN_UNDER
            return "일반볼합(짝+언더)";
        } else if (marketType === 31) {//POWERBALL_ODD_OVER
            return "파워볼(홀+오버)";
        } else if (marketType === 32) {//POWERBALL_ODD_UNDER
            return "파워볼(홀+언더)";
        } else if (marketType === 33) {//POWERBALL_EVEN_OVER
            return "파워볼(짝+오버)";
        } else if (marketType === 34) {//POWERBALL_EVEN_UNDER
            return "파워볼(짝+언더)";
        } else if (marketType === 41//REGULAR_ODD_EVEN_LARGE_SMALL
            || marketType === 42) {//REGULAR_ODD_EVEN_MEDIUM
            switch (result) {
                case 1:
                    return "일반볼합(홀+대)";
                case 2:
                    return "일반볼합(짝+대)";
                case 3:
                    return "일반볼합(홀+중)";
                case 4:
                    return "일반볼합(짝+중)";
                case 5:
                    return "일반볼합(홀+소)";
                default:
                    return "일반볼합(짝+소)";
            }
        }
    }
    return "";
}

function renderMinigameKoreanNameByType(type) {
    if (type === 14) //SUTDA
        return "섯다";
    if (type === 13) //SOCCER
        return "축구";
    if (type === 11) //BASEBALL
        return "야구";
    if (type === 12) //CRICKET
        return "크리켓";
    if (type === 1) //POWERBALL_ONEMIN
        return "파워볼1분";
    if (type === 2) //POWERBALL_TWOMIN
        return "파워볼2분";
    if (type === 3) //POWERBALL_THREEMIN
        return "파워볼3분";
    if (type === 21) //EVOLUTION
        return "카지노";
    return "";
}

function renderBetSlipStatus(status, wonAmount) {
    if (status == 1) { //PLACED
        return "<span class=\"badge bg-azure me-1\"></span> 진행중";
    } else if (status == 10) { //SETTLED
        if (wonAmount == null) {
            return "<span class=\"badge bg-success me-1\"></span> 미적중";
        }
        if (wonAmount > 0) {
            return "<span class=\"badge bg-danger me-1\"></span> 적중";
        }
        return "<span class=\"badge bg-success me-1\"></span> 미적중";
    } else if (status == 20) {//CANCELLED
        return "<span class=\"badge me-1\"></span> 유처 취소";
    } else if (status == 21) {//ADMIN CANCELLED
        return "<span class=\"badge me-1\"></span> 관리자 취소";
    } else {
        return "";
    }
}

function getTotalOdds(bets) {
    return Math.round((bets.reduce((prev, current) => prev * current.odds, 1) + Number.EPSILON) * 100000) / 100000;
}

function formatNumberWithComma(amount, precision = 0) {
    if (amount === null || amount === undefined) {
        return "";
    }
    return accounting.formatMoney(amount, {symbol: "", precision: precision});
}

function getTotalExpectedWinAmount(bets, betAmount) {
    return formatNumberWithComma(getTotalOdds(bets) * betAmount);
}

function isBetWdl(bet) {
    if ((bet.line === null || bet.line === "")
        && (bet.baseLine === null || bet.baseLine === "")
        && !(bet.odd1 === null || bet.odd1 === 0)
        && !(bet.odd3 == null || bet.odd3 === 0)) {
        return true;
    }
    return false;
}

function isBetHandicapOrUO(bet) {
    if ((!(bet.line == null || bet.line === "") || !(bet.baseLine === null || bet.baseLine === ""))
        && !(bet.odd1 === null || bet.odd1 === 0)
        && !(bet.odd3 === null || bet.odd3 === 0)
        && (bet.odd2 === null || bet.odd2 === 0)) {
        return true;
    }
    return false;
}

function isBetBonus(bet) {
    if (bet.marketId === -1) {
        return true;
    }
    return false;
}

function isBetSpecial(bet) {
    if ((bet.odd1 === null || bet.odd1 === 0)
        && (bet.odd2 === null || bet.odd2 === 0)
        && (bet.odd3 === null || bet.odd3 === 0)) {
        return true;
    }
    return false;
}

function renderTransactionPointLogActionType(type) {
    if (type === 100) //REGISTER
        return "회원가입";
    if (type === 101) //IDENTITY_VERIFICATION
        return "본인인증";
    if (type === 102) //LOGIN
        return "로그인";
    if (type === 103) //LEVEL_UP
        return "레벨업";
    if (type === 104) //MANUAL_ADJUSTMENT
        return "관리자 변경";
    if (type === 110) //MANUAL_ADJUSTMENT
        return "쪽지 보내기";
    return "";
}

function renderTransactionCashLogActionType(type) {
    if (type === 1) //CASH_CHARGE
        return "캐쉬충전";
    if (type === 2) //CASH_USAGE
        return "캐쉬사용";
    if (type === 3) //MANUAL_ADJUSTMENT
        return "관리자 변경";
    return "";
}

function renderTransactionLogActionType(type) {
    if (type === 1000) //ITEM_USAGE
        return "아이템 사용";
    if (type === 1001) //FREE_COLLECT
        return "무료충전";
    if (type === 1002) //MANUAL_ADJUSTMENT
        return "관리자 변경";
    if (type === 1100) //PREMATCH_BET
        return "사전배팅";
    if (type === 1101) //PREMATCH_CANCEL
        return "사전배팅 취소";
    if (type === 1102) //PREMATCH_HIT
        return "사전배팅 적중";
    if (type === 1103) //PREMATCH_LOSS
        return "사전배팅 미적중";
    if (type === 1104) //PREMATCH_ROLLBACK
        return "사전배팅 롤백";
    if (type === 1105) //PREMATCH_ADMIN_CANCEL
        return "사전배팅 관리자 취소";
    if (type === 1110) //INPLAY_BET
        return "실시간배팅";
    if (type === 1111) //INPLAY_CANCEL
        return "실시간배팅 취소";
    if (type === 1112) //INPLAY_HIT
        return "실시간배팅 적중";
    if (type === 1113) //INPLAY_LOSS
        return "실시간배팅 미적중";
    if (type === 1114) //INPLAY_ROLLBACK
        return "실시간배팅 롤백";
    if (type === 1115) //INPLAY_ADMIN_CANCEL
        return "실시간배팅 관리자 취소";
    if (type === 10000) //CASH_CHARGE
        return "충전";
    if (type === 10100) //REQUEST_EXCHANGE
        return "환전";
    if (type === 10100) //REFUND_EXCHANGE
        return "환전 환불";
    if (type === 1200) //EVOLUTION_BET
        return "카지노 배팅";
    if (type === 1201) //EVOLUTION_CANCEL
        return "카지노 취소";
    if (type === 1202) //EVOLUTION_HIT
        return "카지노 적중";
    if (type === 1205) //EVOLUTION_MISC
        return "카지노 기타";
    if (type === 1300) //MINIGAME_BET
        return "미니게임 배팅";
    if (type === 1301) //MINIGAME_CANCEL
        return "미니게임 취소";
    if (type === 1302) //MINIGAME_HIT
        return "미니게임 적중";

    if (type === 2001) //BONUS_SPORT_BET
        return "스포츠 베팅 보너스";
    if (type === 2002) //BONUS_SPORT_LOSE
        return "느슨한 스포츠 베팅 보너스";
    if (type === 2003) //BONUS_MINIGAME_BET
        return "미니 게임 베팅 보너스";
    if (type === 2004) //BONUS_MINIGAME_LOSE
        return "느슨한 미니 게임 베팅 보너스";
    if (type === 2005) // BONUS_FIRST_CHARGE
        return "첫 충전 보너스";
    if (type === 2006) //BONUS_EVERY_CHARGE
        return "충전 보너스";

    return "";
}

function renderSportNameFromSportId(sportId) {
    if (sportId == null) {
        return "";
    }
    if (sportId === 6046) //SOCCER
        return "축구";
    if (sportId === 154914) //BASEBALL
        return "야구";
    if (sportId === 48242) //BASKETBALL
        return "농구";
    if (sportId === 35232) //ICE_HOCKEY
        return "아이스 하키";
    if (sportId === 154830) //VOLLEYBALL
        return "배구";
    if (sportId === 131506) //AMERICAN_FOOTBALL
        return "미식축구";
    return sportId ? "기타" : "";
}

function renderBetStatus(settlementRate) {
    if (settlementRate == null) { //if null => not settled yet
        return "<span class=\"badge bg-azure me-1\"></span> 진행중";
    }
    if (settlementRate == 0) { //if rate = 0 => loss
        return "<span class=\"badge bg-success me-1\"></span> 미적중";
    }
    if (settlementRate > 1) { //if rate > 1 => won
        return "<span class=\"badge bg-danger me-1\"></span> 적중";
    }
    return "";
}

function renderFixtureStatus(status) {
    if (status == 1) { //NSY
        return "<span class=\"badge bg-warning me-1\"></span> 경기전";
    }
    if (status == 9) { //ABOUT_TO_START
        return "<span class=\"badge bg-warning me-1\"></span> 곧시작";
    }
    if (status == 2) { //IN_PROGRESS
        return "<span class=\"badge bg-primary me-1\"></span> 경기중";
    }
    if (status == 3) { //FINISHED
        return "<span class=\"badge bg-secondary me-1\"></span> 경기완료";
    }
    if (status == -20) { //REFUNDED
        return "<span class=\"badge bg-danger me-1\"></span> REFUNDED";
    }
    if (status == 5) { //POSTPONED
        return "<span class=\"badge bg-danger me-1\"></span> POSTPONED";
    }
    if (status == -2) { //POSTPONED_TEMPORARY
        return "<span class=\"badge bg-danger me-1\"></span> POSTPONED_TEMPORARY";
    }
    if (status == 8) { //COVERAGE_LOST
        return "<span class=\"badge bg-danger me-1\"></span> COVERAGE_LOST";
    }
    if (status == -3) { //CANCELLED
        return "<span class=\"badge bg-secondary me-1\"></span> CANCELLED";
    }
    if (status == 7) { //ABANDONED
        return "<span class=\"badge bg-danger me-1\"></span> ABANDONED";
    }
    if (status == 6) { //INTERRUPTED
        return "<span class=\"badge bg-danger me-1\"></span> INTERRUPTED";
    }

    return "";
}

function getAllOddIds(odds) {
    const oddIds = (odds && odds.map(x => x.id)) || [];
    return oddIds.join(',');
}

function renderProviderName(providerId) {
    if (providerId == null) {
        return "Bet365";
    }
    if (providerId === 8) { //Bet365
        return "Bet365";
    }
    if (providerId === 13) {//Bwin
        return "Bwin";
    }
    if (providerId === 145) {//OneXBet
        return "OneXBet";
    }
    if (providerId === 29) {//TitanBet
        return "TitanBet";
    }
    if (providerId === 4) {//Pinnacle
        return "Pinnacle";
    }
    if (providerId === 38) {//Eight88
        return "888";
    }
    if (providerId === 74) {//MarathonBet
        return "MarathonBet";
    }
    if (providerId === 999) {//Other
        return "기타";
    }
    return "기타";
}

function renderMinigameNameByType(type) {
    if (type == null) {
        return "";
    }
    if (type === 14) {//SUTDA
        return "Sutda";
    }
    if (type === 13) {//SOCCER
        return "Soccer";
    }
    if (type === 11) {//BASEBALL
        return "Baseball";
    }
    if (type === 12) {//CRICKET
        return "Cricket";
    }
    if (type === 1) {//POWERBALL1 min
        return "Powerball 1 min";
    }
    if (type === 2) {//POWERBALL2 min
        return "Powerball 2 min";
    }
    if (type === 3) {//POWERBALL3 min
        return "Powerball 3 min";
    }
    if (type === 21) {//EVOLUTION
        return "Evolution";
    }
    return "";
}

$(document).on('click', '.open-user-info-modal', function () {
    const userId = Number($(this).data('userid'));
    showUserInfoModal(userId);
    return false;
});

$('#user-info-modal .modal-title__tab').click(function () {
    $('#user-info-modal .modal-title__tab').removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('log')) {
        $(".select-view-type[data-target='#prematchBetSlips']").click();
        $('#user-info-modal .modal-body.log').show();
        $('#user-info-modal .modal-body.info').hide();
    } else {
        $('#user-info-modal .modal-body.log').hide();
        $('#user-info-modal .modal-body.info').show();
    }
})

$(".select-view-type").click(function () {
    $(".select-view-type").removeClass("btn-secondary").addClass("btn-outline-secondary");
    $(this).removeClass("btn-outline-secondary").addClass("btn-secondary");
    $(".tab-section").hide();
    $($(this).data('target')).show();
    return false;
});

$(document).on('click', '.row-header', function () {
    $(this).nextUntil('tr.row-header').toggle();
    if ($(this).hasClass('.row-expanded')) {
        $(this).removeClass('.row-expanded');
        $(this).addClass('.row-folded');
        $(this).find('.row-expand').html('<i class="ti ti-chevron-down"></i>');
    } else {
        $(this).removeClass('.row-folded');
        $(this).addClass('.row-expanded');
        $(this).find('.row-expand').html('<i class="ti ti-chevron-up"></i>');
    }
});

$('#send-multiple-msg').click(function () {
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader()
    $.ajax({
        type: "GET",
        url: `/user/allregistercodes.asp`,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data, textStatus, jqXHR) {
            let HTML = '';
            if (data && data.length > 0) {
                HTML = data.map(item => `
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="${item}" name="referrerCode">
                    <label class="form-check-label">${item}</label>
                </div>
                `).join('');
            } else {
                HTML = `<p class="text-center">데이터가 없습니다.</p>`
            }
            $('#modal-sending-msg-multiple .referrerList').html(HTML);
            $('#modal-sending-msg-multiple input[name=usernames]').val('');
            $('#modal-sending-msg-multiple input[name=title]').val('');
            $('#modal-sending-msg-multiple textarea[name=body]').val('');
            $('#modal-sending-msg-multiple input[name=level]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple').modal('show');
        },
        error: function (request, status, error) {
            toastr.error('작업이 실패했습니다.');
        },
    }).always(function () {
        hideFullpageLoader();
    });
})

$('#sending-msg-to-multiple-btn').click(function (e) {
    const usernames = $('#modal-sending-msg-multiple input[name=usernames]').val().split(',');
    const title = $('#modal-sending-msg-multiple input[name=title]').val();
    const body = $('#modal-sending-msg-multiple textarea[name=body]').val();
    const referrerList = $('#modal-sending-msg-multiple input[name=referrerCode]:checked').map(function (idx, elem) {
        return $(elem).val();
    }).get();
    const levelList = $('#modal-sending-msg-multiple input[name=level]:checked').map(function (idx, elem) {
        return $(elem).val();
    }).get();
    const referrerTypeList = $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
        return $(elem).val();
    }).get();

    if ((!usernames || usernames.length === 0)
        && (!referrerList || referrerList.length === 0)
        && (!levelList || levelList.length === 0)
        && (!referrerTypeList || referrerTypeList.length === 0)) {
        toastr.error('수령인을 선택해주세요!');
        return;
    }

    if (!title || title.length === 0 || !body || body.length === 0) {
        toastr.error('메시지 내용을 입력하세요.');
        return;
    }

    if (confirm("보내시겠습니까?")) {
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");
        showFullpageLoader();
        $.ajax({
            type: "POST",
            url: '/privatemessage/send.asp',
            dataType: "text",
            contentType: "application/json;charset=utf-8",
            cache: false,
            data: JSON.stringify({
                userNames: usernames.map(x => String(x).trim()),
                referrerCodes: referrerList ? referrerList.filter(item => item !== '0') : [],
                levels: levelList,
                referrerTypes: referrerTypeList,
                title: title,
                content: body,
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data, textStatus, jqXHR) {
                $('#modal-sending-msg-multiple').modal('hide');
                toastr.success('메시지가 전송되었습니다.')
                if (location.pathname === '/privatemessage/list') {
                    location.reload();
                }
            },
            error: function (request, status, error) {
                toastr.error('작업이 실패했습니다.');
            },
        }).always(function () {
            hideFullpageLoader();
        });
    }

    e.preventDefault();
});

$(document).on('change',
    '#modal-sending-msg-multiple input[name=referrerCode], ' +
    '#modal-sending-msg-multiple input[name=level],' +
    '#modal-sending-msg-multiple input[name=referrerType],' +
    '#modal-sending-msg-multiple input[name=usernames]', (function () {
        const name = $(this).attr('name');
        if (name === 'referrerCode') {
            $('#modal-sending-msg-multiple input[name=level]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=usernames]').val('');
        }
        if (name === 'level') {
            $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerCode]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=usernames]').val('');
        }
        if (name === 'referrerType') {
            $('#modal-sending-msg-multiple input[name=level]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerCode]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=usernames]').val('');
            const referrerTypeList = $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
                return $(elem).val();
            }).get();
            if ($(this).val() === '0') {
                if ($(this).is(':checked')) {
                    $('#modal-sending-msg-multiple input[name=referrerType]').map(function (idx, elem) {
                        $(elem).prop("checked", true);
                    });
                } else {
                    $('#modal-sending-msg-multiple input[name=referrerType]').map(function (idx, elem) {
                        $(elem).prop("checked", false);
                    });
                }
            } else {
                if (referrerTypeList.filter(x => x !== '0').length === 3) {
                    $('#modal-sending-msg-multiple input[name=referrerType]').first().prop("checked", true);
                } else {
                    $('#modal-sending-msg-multiple input[name=referrerType]').first().prop("checked", false);
                }
            }
        }
        if (name === 'usernames') {
            $('#modal-sending-msg-multiple input[name=level]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerType]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
            $('#modal-sending-msg-multiple input[name=referrerCode]:checked').map(function (idx, elem) {
                $(elem).prop("checked", false);
            });
        }
    }));

$(document).on('click', '.show-match-betting-list-modal', (function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    const oddId = $(this).data('oddid');
    const isInplay = $(this).data('isinplay') === 'true';
    if (!id || id.length === 0)
        return false;
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader()
    $.ajax({
        type: "GET",
        url: `/fixture/betlist.asp?oddId=${oddId}&isInplay=${isInplay}`,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data, textStatus, jqXHR) {
            const {marketNameKo, startDate, leagueName, homeTeamName, awayTeamName, totalBetAmount, items} = data;

            $('#modal-match-betting-list #summary-info .marketName').text(marketNameKo);
            $('#modal-match-betting-list #summary-info .startTime').text(moment(startDate).format('Yyyyy-MM-DD h:mm:ss'));
            $('#modal-match-betting-list #summary-info .leagueName').text(leagueName);
            $('#modal-match-betting-list #summary-info .teamName').html(`<div class="homeAwayTeamName">
                    <div class="item">홈: ${homeTeamName}</div>
                    <div class="item">원: ${awayTeamName}</div>
                </div>`);
            $('#modal-match-betting-list #summary-info .totalBetAmount').text(formatNumberWithComma(totalBetAmount));

            let HTML = '';
            if (items && items.length > 0) {
                HTML = items.map(item => `<tr>
                        <td>${item.nickName}</td>
                        <td>${item.userName}</td>
                        <td>${formatNumberWithComma(item.betAmount)}원</td>
                        <td>
                            <select data-id="${item.betId}" class="bet-result">
                                <option value="${1}" ${item.betStatus === 1 ? 'selected' : ''}>패</option>
                                <option value="${2}" ${item.betStatus === 2 ? 'selected' : ''}>승</option>
                                <option value="${3}" ${item.betStatus === 3 ? 'selected' : ''}>적특</option>
                            </select>
                        </td>
                        <td>${moment(item.created).format('Yyyyy-MM-DD h:mm:ss')}</td>
                    </tr>`).join('');
            } else {
                HTML = `<tr><td colspan="5" class="text-center">데이터가 없습니다.</td></tr>`
            }
            $('#modal-match-betting-list #betsListTable tbody').html(HTML);
            if (items && items.length > 0) {
                $('.update-bet-result').show();
            } else {
                $('.update-bet-result').hide();
            }
            $("#modal-match-betting-list").modal("show");
        },
        error: function (request, status, error) {
            toastr.error('작업이 실패했습니다.');
        },
    }).always(function () {
        hideFullpageLoader();
    });
}))

$(document).on('click', '.update-bet-result', function(e) {
    const settlements = $('.bet-result');
    let data = [];
    settlements.each(function( index ) {
        const betId = $(this).data('id');
        const settlement = $(this).val();
        data.push({betId, settlement});
    });

    if (data.length === 0) {
        return false;
    }

    if (!confirm('베팅 결과를 업데이트하시겠습니까?')) {
        return false;
    }

    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader();

    $.ajax({
        url: '/betslip/updateBetResults',
        type: "POST",
        dataType: "text",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        contentType: "application/json;charset=utf-8",
        cache: false,
        data: JSON.stringify({data: data, isRollback: false}),
        statusCode: {
            422: function() {
                if (confirm('하나 이상의 베팅 슬립이 이미 정산되었습니다. 강제 업데이트 결과를 원하십니까?')) {
                    showFullpageLoader();
                    $.ajax({
                        url: '/betslip/updateBetResults',
                        type: "POST",
                        dataType: "text",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader(header, token);
                        },
                        contentType: "application/json;charset=utf-8",
                        cache: false,
                        data: JSON.stringify({data: data, isRollback: true}),
                    }).done(function (data) {
                        toastr.success('업데이트 성공!');
                    }).fail(function (err) {
                        toastr.error(err.responseText);
                    }).always(function () {
                        hideFullpageLoader();
                    });
                }
            },
        }
    }).done(function (data) {
        toastr.success('업데이트 성공!');
    }).fail(function (err) {
        toastr.error(err.responseText);
    }).always(function () {
        hideFullpageLoader();
    });
})

$(document).on('click', '.update-betresult-by-fixtureid', function(e) {
    const fixtureId = $(this).data('id');

    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader();
    $.ajax({
        url: '/betslip/updateBetResultByFixtureId',
        type: "POST",
        dataType: "text",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        contentType: "application/json;charset=utf-8",
        cache: false,
        data: JSON.stringify({fixtureIds: [fixtureId], isRollback: false}),
        statusCode: {
            422: function() {
                if (confirm('하나 이상의 베팅 슬립이 이미 정산되었습니다. 강제 업데이트 결과를 원하십니까?')) {
                    showFullpageLoader();
                    $.ajax({
                        url: '/betslip/updateBetResultByFixtureId',
                        type: "POST",
                        dataType: "text",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader(header, token);
                        },
                        contentType: "application/json;charset=utf-8",
                        cache: false,
                        data: JSON.stringify({fixtureIds: [fixtureId], isRollback: true}),
                    }).done(function (data) {
                        toastr.success('업데이트 성공!');
                    }).fail(function (err) {
                        toastr.error(err.responseText);
                    }).always(function () {
                        hideFullpageLoader();
                    });
                }
            },
        }
    }).done(function (data) {
        toastr.success('업데이트 성공!');
    }).fail(function (err) {
        toastr.error(err.responseText);
    }).always(function () {
        hideFullpageLoader();
    });
})

// start currentsessions js
$(document).ready(function () {
    $('#open-currentsessions-modal-btn').click(function () {
        showCurrentSessionsModal();
        return false;
    });
    $(document).on('click', '.currentsessions-sendmsg-btn', function(e) {
        console.log("SENDING MESSAGE TO");
        console.log($(this).attr("data-id"));
        console.log($(this).attr("data-username"));
        showSendMessageToSingleUserModal(Number($(this).attr("data-id")), $(this).attr("data-username"));
        return false;
    });
    $(document).on('click', '.currentsessions-invalidatetoken-btn', function(e) {
        e.preventDefault();
        console.log("FORCING LOGOUT TO");
        console.log($(this).attr("data-token"));
        if ($(this).attr("data-token").length > 0) {
            if (confirm("강제 로그아웃 하시겠습니까?")) {
                const token = $("meta[name='_csrf']").attr("content");
                const header = $("meta[name='_csrf_header']").attr("content");
                showFullpageLoader();
                $.ajax({
                    type: "POST",
                    url: '/setting/invalidatetoken',
                    dataType: "text",
                    contentType: "application/json;charset=utf-8",
                    cache: false,
                    data: JSON.stringify({token: $(this).attr("data-token")}),
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader(header, token);
                    },
                    success: function (data, textStatus, jqXHR) {
                        $('#modal-currentsessions').modal('hide');
                        toastr.success('강제 로그아웃 성공!');
                    },
                    error: function (request, status, error) {
                        toastr.error('작업이 실패했습니다.');
                    },
                }).always(function () {
                    hideFullpageLoader();
                });
            }
        }
    });
});

function showCurrentSessionsModal() {
    $("#currentsessions-count").html("0");
    $("#currentsessions-list tbody").html(`<tr><td colspan="5" align="center">현재접속자 없습니다.</td></tr>`);
    // $("#modal-currentsessions").modal("show");
    // return;
    const token = $("meta[name='_csrf']").attr("content");
    const header = $("meta[name='_csrf_header']").attr("content");
    showFullpageLoader();
    $.ajax({
        type: "GET",
        url: '/setting/sessions.asp',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data, textStatus, jqXHR) {
            if (data?.length > 0) {
                var htmlStr = "";
				console.log(data);
                for (var i = 0; i < data.length; i ++) {
                    htmlStr += `
                        <tr>
                            <td>
                                <a class="open-user-info-modal" href="#" data-userid="${data[i].userId}">${data[i].userName} ${data[i].referrer ? ("( "+ data[i].referrer +" )") : ""}</a><br />
                                ${accounting.formatNumber(data[i].balance ?? 0)}원
                            </td>
                            <td>${data[i].ipAddr}</td>
                            <td>
                                <a href="${data[i].domain}" target="_blank">${data[i].domain}</a>
                            </td>
                            <td>
                                <a href="#" style="font-size: 20px; text-decoration: none; color: #d8a411;" class="currentsessions-sendmsg-btn" data-id="${data[i].userId}" data-username="${data[i].userName}">
                                    <i class="ti ti-mail-forward"></i>
                                </a>
                            </td>
                            <td class="text-right">
                                <a href="#" style="font-size: 20px; text-decoration: none; color: #c20000;" class="currentsessions-invalidatetoken-btn" data-token="${data[i].token}">
                                    <i class="ti ti-logout"></i>
                                </a>
                            </td>
                        </tr>
                    `;
                }
                $("#currentsessions-list tbody").html(htmlStr);
            }
            $("#modal-currentsessions").modal("show");
        },
        error: function (request, status, error) {
            toastr.error('작업이 실패했습니다.');
        },
    }).always(function () {
        hideFullpageLoader();
    });

    $.ajax({
        type: "GET",
        url: '/setting/sessioncnt.asp',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(header, token);
        },
        success: function (data, textStatus, jqXHR) {
            $("#currentsessions-count").html(accounting.formatNumber(data ?? 0));
        },
        error: function (request, status, error) {
        }
    }).always(function () {
    });
}

function showSendMessageToSingleUserModal(userId, userName) {
    $('#modal-currentsessions').modal('hide');

    $('#modal-sending-msg-single input[name=username]').val(userName);
    $('#modal-sending-msg-single').modal('show');
}

$('#sending-msg-to-single-btn').click(function (e) {
    const username = $('#modal-sending-msg-single input[name=username]').val();
    const title = $('#modal-sending-msg-single input[name=title]').val();
    const body = $('#modal-sending-msg-single textarea[name=body]').val();

    if (!username || username.trim().length === 0) {
        toastr.error('수령인을 입력해주세요!');
        return;
    }

    if (!title || title.trim().length === 0 || !body || body.trim().length === 0) {
        toastr.error('메시지 내용을 입력하세요.');
        return;
    }

    if (confirm("보내시겠습니까?")) {
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");
        showFullpageLoader();
        $.ajax({
            type: "POST",
            url: '/privatemessage/send',
            dataType: "text",
            contentType: "application/json;charset=utf-8",
            cache: false,
            data: JSON.stringify({
                userNames: [username.trim()],
                referrerCodes: null,
                levels: null,
                referrerTypes: null,
                title: title.trim(),
                content: body.trim(),
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function (data, textStatus, jqXHR) {
                $('#modal-sending-msg-single').modal('hide');
                toastr.success('메시지가 전송되었습니다.')
                if (location.pathname === '/privatemessage/list') {
                    location.reload();
                }
            },
            error: function (request, status, error) {
                toastr.error('작업이 실패했습니다.');
            },
        }).always(function () {
            hideFullpageLoader();
        });
    }

    e.preventDefault();
});

// end currentsessions js