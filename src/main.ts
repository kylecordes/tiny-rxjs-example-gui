import { fromFetch } from "rxjs/fetch";
import { fromEvent } from "rxjs";
import { debounceTime, map, switchMap } from "rxjs/operators";

const filterEl = document.getElementById("search")!;
const resultsEl = document.getElementById("results")!;

fromEvent(filterEl, "input")
  .pipe(
    map((evt) => (evt?.target as any).value),
    debounceTime(250),
    switchMap((x) =>
      fromFetch(`https://api.angularbootcamp.com/employees?_limit=10&q=${x}`)
    ),
    switchMap((x) => x.json())
  )
  .subscribe(
    (data: any) => (resultsEl.innerHTML = JSON.stringify(data, undefined, 2))
  );
