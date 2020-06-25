$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api",
  }).then((allTodos) => {
    console.log(allTodos);
    renderTodos(allTodos);
  });
});

const renderTodos = (arr) = {
  $("#card-container").html(""),
  arr.forEach((todo) => {
    console.log(todo);
    $("#card-container").prepend(
      `
      <div class="card mb-2">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
              ✅ This need to be done
            </h6>
            <p class="card-text">
              ${todo.text}
            </p>
            <div class="text-center">
              <button data-id=${todo.id} style="width: 150px;" class="btn btn-outline-success">
                Edit
              </button>
              <button data-id=${todo.id} style="width: 150px;" class="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
      </div>
      `
    );
  }),
};

$(document).on("click", "#btnUpdate", function () {
  console.log($(this).attr("data-id"));
});

