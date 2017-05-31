import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchBoxComponent } from './search-box.component';
import { SearchService, SearchServiceMock } from '../../testing/SearchServiceMock';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ],
      imports: [
        HttpModule,
      ],
      providers: [
        { provide: SearchService, useClass: SearchServiceMock },
      ],
    });

    TestBed.overrideComponent(SearchBoxComponent, {
      set: {
        template: `Overriden SearchBoxComponent`,
      },
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(SearchBoxComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
