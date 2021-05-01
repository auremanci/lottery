'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">golden-race documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5f386fdb921094574a7920a0c22b2001"' : 'data-target="#xs-components-links-module-AppModule-5f386fdb921094574a7920a0c22b2001"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5f386fdb921094574a7920a0c22b2001"' :
                                            'id="xs-components-links-module-AppModule-5f386fdb921094574a7920a0c22b2001"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryComponentsModule.html" data-type="entity-link">LotteryComponentsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryListTicketsModule.html" data-type="entity-link">LotteryListTicketsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryListTicketsModule-92d227255073b32209d5330f98f0d0f7"' : 'data-target="#xs-components-links-module-LotteryListTicketsModule-92d227255073b32209d5330f98f0d0f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryListTicketsModule-92d227255073b32209d5330f98f0d0f7"' :
                                            'id="xs-components-links-module-LotteryListTicketsModule-92d227255073b32209d5330f98f0d0f7"' }>
                                            <li class="link">
                                                <a href="components/ButtonsEndLotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonsEndLotteryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListTicketsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListTicketsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryModule.html" data-type="entity-link">LotteryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' : 'data-target="#xs-components-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' :
                                            'id="xs-components-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' }>
                                            <li class="link">
                                                <a href="components/LotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotteryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' : 'data-target="#xs-injectables-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' :
                                        'id="xs-injectables-links-module-LotteryModule-28f514a65262e6025aa913525f1be417"' }>
                                        <li class="link">
                                            <a href="injectables/LotteryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LotteryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryNumbersModule.html" data-type="entity-link">LotteryNumbersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryNumbersModule-9a97297ad506a23f59ca0800f2a0aaac"' : 'data-target="#xs-components-links-module-LotteryNumbersModule-9a97297ad506a23f59ca0800f2a0aaac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryNumbersModule-9a97297ad506a23f59ca0800f2a0aaac"' :
                                            'id="xs-components-links-module-LotteryNumbersModule-9a97297ad506a23f59ca0800f2a0aaac"' }>
                                            <li class="link">
                                                <a href="components/BallSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BallSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumbersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumbersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryResultLotteryModule.html" data-type="entity-link">LotteryResultLotteryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryResultLotteryModule-0773ef3d81de2bb0fee5a3cab40f1187"' : 'data-target="#xs-components-links-module-LotteryResultLotteryModule-0773ef3d81de2bb0fee5a3cab40f1187"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryResultLotteryModule-0773ef3d81de2bb0fee5a3cab40f1187"' :
                                            'id="xs-components-links-module-LotteryResultLotteryModule-0773ef3d81de2bb0fee5a3cab40f1187"' }>
                                            <li class="link">
                                                <a href="components/MessageEndLotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageEndLotteryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultLotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultLotteryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinningNumberComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinningNumberComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryTicketModule.html" data-type="entity-link">LotteryTicketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' : 'data-target="#xs-components-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' :
                                            'id="xs-components-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' }>
                                            <li class="link">
                                                <a href="components/BallsTicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BallsTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LotteryFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotteryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetTicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' : 'data-target="#xs-injectables-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' :
                                        'id="xs-injectables-links-module-LotteryTicketModule-0b4526dc88b5ef87aae7ddb132238c1e"' }>
                                        <li class="link">
                                            <a href="injectables/LotteryFormService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LotteryFormService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Lottery.html" data-type="entity-link">Lottery</a>
                            </li>
                            <li class="link">
                                <a href="classes/Prize.html" data-type="entity-link">Prize</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ticket.html" data-type="entity-link">Ticket</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LotteryFormService.html" data-type="entity-link">LotteryFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LotteryService.html" data-type="entity-link">LotteryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});