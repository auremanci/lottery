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
                                            'data-target="#components-links-module-AppModule-1f37cc105ce2df8e9962e877bdc8dbfe"' : 'data-target="#xs-components-links-module-AppModule-1f37cc105ce2df8e9962e877bdc8dbfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1f37cc105ce2df8e9962e877bdc8dbfe"' :
                                            'id="xs-components-links-module-AppModule-1f37cc105ce2df8e9962e877bdc8dbfe"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryComponentsModule.html" data-type="entity-link">LotteryComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryComponentsModule-e1fca2fd49893380b012bcb7cbec3fdd"' : 'data-target="#xs-components-links-module-LotteryComponentsModule-e1fca2fd49893380b012bcb7cbec3fdd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryComponentsModule-e1fca2fd49893380b012bcb7cbec3fdd"' :
                                            'id="xs-components-links-module-LotteryComponentsModule-e1fca2fd49893380b012bcb7cbec3fdd"' }>
                                            <li class="link">
                                                <a href="components/LotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotteryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LotteryModule.html" data-type="entity-link">LotteryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' : 'data-target="#xs-components-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' :
                                            'id="xs-components-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' }>
                                            <li class="link">
                                                <a href="components/LotteryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotteryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' : 'data-target="#xs-injectables-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' :
                                        'id="xs-injectables-links-module-LotteryModule-c9d17378ccf8ce416f5ed4d3c17d3cdc"' }>
                                        <li class="link">
                                            <a href="injectables/LotteryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LotteryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BallSelectorComponent.html" data-type="entity-link">BallSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BallsTicketComponent.html" data-type="entity-link">BallsTicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BetSlipComponent.html" data-type="entity-link">BetSlipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListTicketsComponent.html" data-type="entity-link">ListTicketsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LotteryFormComponent.html" data-type="entity-link">LotteryFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResultLotteryComponent.html" data-type="entity-link">ResultLotteryComponent</a>
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