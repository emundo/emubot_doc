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
                    <a href="index.html" data-type="index-link">emubot API Documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
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
                                <a href="classes/CliAdapter.html" data-type="entity-link">CliAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogflowAdapter.html" data-type="entity-link">DialogflowAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogflowV2Adapter.html" data-type="entity-link">DialogflowV2Adapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DummyNlpAdapter.html" data-type="entity-link">DummyNlpAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacebookAdapter.html" data-type="entity-link">FacebookAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MirrorInterceptor.html" data-type="entity-link">MirrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/RasaAdapter.html" data-type="entity-link">RasaAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlackAdapter.html" data-type="entity-link">SlackAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnipsAdapter.html" data-type="entity-link">SnipsAdapter</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChatAdapter.html" data-type="entity-link">ChatAdapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClassConstructor.html" data-type="entity-link">ClassConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogflowConfig.html" data-type="entity-link">DialogflowConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacebookChatConfig.html" data-type="entity-link">FacebookChatConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Interceptor.html" data-type="entity-link">Interceptor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NlpAdapter.html" data-type="entity-link">NlpAdapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SlackConfig.html" data-type="entity-link">SlackConfig</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
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
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});